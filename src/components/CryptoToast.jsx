import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const CryptoToast = ({ className = "" }) => {
  const { t } = useTranslation();
  
  const [prices, setPrices] = useState({
    ethereum: { current: 0, previous: 0, trend: 'neutral' },
    bitcoin: { current: 0, previous: 0, trend: 'neutral' }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  // Fetch prices from CoinGecko API
  const fetchPrices = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd'
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      setPrices(prevPrices => {
        const newPrices = { ...prevPrices };
        
        // Update Ethereum
        if (data.ethereum?.usd) {
          newPrices.ethereum = {
            previous: prevPrices.ethereum.current || data.ethereum.usd,
            current: data.ethereum.usd,
            trend: prevPrices.ethereum.current ? 
              (data.ethereum.usd > prevPrices.ethereum.current ? 'up' : 
               data.ethereum.usd < prevPrices.ethereum.current ? 'down' : 'neutral') : 'neutral'
          };
        }
        
        // Update Bitcoin
        if (data.bitcoin?.usd) {
          newPrices.bitcoin = {
            previous: prevPrices.bitcoin.current || data.bitcoin.usd,
            current: data.bitcoin.usd,
            trend: prevPrices.bitcoin.current ? 
              (data.bitcoin.usd > prevPrices.bitcoin.current ? 'up' : 
               data.bitcoin.usd < prevPrices.bitcoin.current ? 'down' : 'neutral') : 'neutral'
          };
        }
        
        return newPrices;
      });

      setLastUpdate(new Date());
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch crypto prices:', error);
      setIsLoading(false);
    }
  }, []);

  // Initialize price fetching
  useEffect(() => {
    fetchPrices();
    
    // Set up price update interval (2 minutes)
    const interval = setInterval(fetchPrices, 120000);
    
    return () => clearInterval(interval);
  }, [fetchPrices]);

  // Format price for display
  const formatPrice = (price) => {
    if (price > 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  };

  // Get trend display (always show up arrow)
  const getTrendDisplay = (trend) => {
    return { symbol: '▲', color: 'text-green-400', bgColor: 'bg-green-400/10' };
  };

  if (!isVisible) return null;

  return (
    <div className={`crypto-toast relative ${className}`}>
      <div className="bg-black/80 backdrop-blur-md rounded-lg border border-white/20 p-4 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-mono text-gray-300">{t('crypto.livePrices')}</span>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors text-lg leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <div className="text-gray-300 text-sm font-mono">{t('crypto.loading')}</div>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Ethereum */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  Ξ
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">ETH</div>
                  <div className="text-gray-400 text-xs">{t('crypto.ethereum')}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-mono font-semibold">
                  {formatPrice(prices.ethereum.current)}
                </span>
                <span className={`${getTrendDisplay(prices.ethereum.trend).color} text-sm`}>
                  {getTrendDisplay(prices.ethereum.trend).symbol}
                </span>
              </div>
            </div>

            {/* Bitcoin */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  ₿
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">BTC</div>
                  <div className="text-gray-400 text-xs">{t('crypto.bitcoin')}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-mono font-semibold">
                  {formatPrice(prices.bitcoin.current)}
                </span>
                <span className={`${getTrendDisplay(prices.bitcoin.trend).color} text-sm`}>
                  {getTrendDisplay(prices.bitcoin.trend).symbol}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        {lastUpdate && (
          <div className="mt-3 pt-3 border-t border-white/10">
            <div className="text-xs text-gray-400 text-center font-mono">
              {t('crypto.updated')} {lastUpdate.toLocaleTimeString()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoToast;