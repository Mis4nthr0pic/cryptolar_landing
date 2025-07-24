import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const BlockCountdown = () => {
  const { t } = useTranslation();
  const [blocksRemaining, setBlocksRemaining] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const PUBLIC_RPC_URL = 'https://cloudflare-eth.com'; // A public RPC endpoint
  const EVENT_DATE_UTC = new Date(Date.UTC(2025, 7, 17, 12, 0, 0)); // August 17, 2025, 12 PM UTC
  const AVERAGE_BLOCK_TIME_SECONDS = 12; // Average Ethereum block time
  const CACHE_KEY = 'ethereum_block_countdown';
  const CACHE_DURATION_MS = 60 * 1000; // Cache for 1 minute

  const fetchBlockNumber = async () => {
    try {
      const response = await fetch(PUBLIC_RPC_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_blockNumber',
          params: [],
          id: 1,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const currentBlockHex = data.result;
      const currentBlockNumber = parseInt(currentBlockHex, 16);
      return currentBlockNumber;
    } catch (err) {
      console.error("Error fetching block number:", err);
      setError(t('blocks_fetch_error'));
      return null;
    }
  };

  const calculateBlocksRemaining = (currentBlockNumber) => {
    const now = new Date();
    const timeRemainingSeconds = Math.max(0, (EVENT_DATE_UTC.getTime() - now.getTime()) / 1000);
    const estimatedBlocksFromNow = Math.ceil(timeRemainingSeconds / AVERAGE_BLOCK_TIME_SECONDS);

    // For a more accurate countdown, we'd need the block number at the event date.
    // Since we don't have that, we estimate blocks remaining from the current block.
    // This is a simplification for a static frontend.
    return estimatedBlocksFromNow;
  };

  const updateCountdown = async () => {
    setLoading(true);
    setError(null);

    const cachedData = localStorage.getItem(CACHE_KEY);
    const now = new Date().getTime();

    if (cachedData) {
      const { timestamp, blocks } = JSON.parse(cachedData);
      if (now - timestamp < CACHE_DURATION_MS) {
        setBlocksRemaining(blocks);
        setLoading(false);
        return;
      }
    }

    const currentBlockNumber = await fetchBlockNumber();
    if (currentBlockNumber !== null) {
      const remaining = calculateBlocksRemaining(currentBlockNumber);
      setBlocksRemaining(remaining);
      localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: now, blocks: remaining }));
    }
    setLoading(false);
  };

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, CACHE_DURATION_MS); // Update every minute
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-8 mb-4 text-gray-400 font-body">
        {t('blocks_loading')}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-8 mb-4 text-red-400 font-body">
        {error}
      </div>
    );
  }

  return (
    <div className="text-center mt-8 mb-4">
      <p className="text-blue-300 text-lg font-body">
        {t('blocks_until_event', { blocks: blocksRemaining.toLocaleString() })}
      </p>
      <p className="text-gray-400 text-sm font-body">
        {t('blocks_disclaimer')}
      </p>
    </div>
  );
};

export default BlockCountdown;