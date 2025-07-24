import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

const CompactCryptoWidget = ({ className = "" }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const ethPanelRef = useRef(null);
  const btcPanelRef = useRef(null);
  const intervalRef = useRef(null);

  const [prices, setPrices] = useState({
    ethereum: { current: 0, previous: 0, trend: 'neutral' },
    bitcoin: { current: 0, previous: 0, trend: 'neutral' }
  });

  const [isLoading, setIsLoading] = useState(true);

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

      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch crypto prices:', error);
      setIsLoading(false);
    }
  }, []);

  // Create 3D text texture
  const createTextTexture = useCallback((text, color = '#ffffff', fontSize = 48) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    canvas.width = 256;
    canvas.height = 128;
    
    // Clear canvas
    context.fillStyle = 'transparent';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set font
    context.font = `bold ${fontSize}px 'Geist Mono', 'Roboto Mono', monospace`;
    context.fillStyle = color;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    
    // Add text with shadow for better visibility
    context.shadowColor = 'rgba(0, 0, 0, 0.8)';
    context.shadowBlur = 6;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    
    return texture;
  }, []);

  // Create compact price panel
  const createCompactPanel = useCallback((coin, position) => {
    const group = new THREE.Group();
    
    // Main panel geometry (smaller)
    const panelGeometry = new THREE.PlaneGeometry(1.8, 1.2);
    const panelMaterial = new THREE.MeshLambertMaterial({
      color: coin === 'ethereum' ? 0x627eea : 0xf7931a,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide
    });
    
    const panel = new THREE.Mesh(panelGeometry, panelMaterial);
    group.add(panel);
    
    // Border frame
    const borderGeometry = new THREE.EdgesGeometry(panelGeometry);
    const borderMaterial = new THREE.LineBasicMaterial({
      color: coin === 'ethereum' ? 0x627eea : 0xf7931a,
      linewidth: 1
    });
    const border = new THREE.LineSegments(borderGeometry, borderMaterial);
    group.add(border);
    
    // Text planes (smaller)
    const textGeometry = new THREE.PlaneGeometry(1.6, 0.3);
    
    // Coin name
    const nameTexture = createTextTexture(
      coin === 'ethereum' ? 'ETH' : 'BTC', 
      coin === 'ethereum' ? '#627eea' : '#f7931a',
      32
    );
    const nameMaterial = new THREE.MeshBasicMaterial({
      map: nameTexture,
      transparent: true
    });
    const nameText = new THREE.Mesh(textGeometry, nameMaterial);
    nameText.position.y = 0.3;
    nameText.position.z = 0.01;
    group.add(nameText);
    
    // Price text (will be updated)
    const priceTexture = createTextTexture('$0.00', '#ffffff', 28);
    const priceMaterial = new THREE.MeshBasicMaterial({
      map: priceTexture,
      transparent: true
    });
    const priceText = new THREE.Mesh(textGeometry, priceMaterial);
    priceText.position.y = 0;
    priceText.position.z = 0.01;
    group.add(priceText);
    
    // Trend arrow (will be updated)
    const arrowTexture = createTextTexture('—', '#ffffff', 40);
    const arrowMaterial = new THREE.MeshBasicMaterial({
      map: arrowTexture,
      transparent: true
    });
    const arrowText = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.3), arrowMaterial);
    arrowText.position.y = -0.3;
    arrowText.position.z = 0.01;
    group.add(arrowText);
    
    // Position the group
    group.position.set(position.x, position.y, position.z);
    
    // Store references for updates
    group.userData = {
      coin,
      priceText,
      arrowText,
      priceMaterial,
      arrowMaterial,
      panel,
      border
    };
    
    return group;
  }, [createTextTexture]);

  // Update panel content
  const updatePanel = useCallback((panelGroup, priceData) => {
    const { priceText, arrowText, priceMaterial, arrowMaterial, panel, border } = panelGroup.userData;
    const { current, trend } = priceData;
    
    // Update price text (shortened format)
    const formattedPrice = current > 1000 ? 
      `$${(current / 1000).toFixed(1)}k` : 
      `$${current.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
    
    const priceTexture = createTextTexture(formattedPrice, '#ffffff', 28);
    priceMaterial.map.dispose();
    priceMaterial.map = priceTexture;
    priceMaterial.needsUpdate = true;
    
    // Update trend arrow
    let arrowSymbol = '—';
    let arrowColor = '#ffffff';
    
    if (trend === 'up') {
      arrowSymbol = '▲';
      arrowColor = '#00ff88';
    } else if (trend === 'down') {
      arrowSymbol = '▼';
      arrowColor = '#ff4444';
    }
    
    const arrowTexture = createTextTexture(arrowSymbol, arrowColor, 40);
    arrowMaterial.map.dispose();
    arrowMaterial.map = arrowTexture;
    arrowMaterial.needsUpdate = true;
    
    // Add subtle glow effect based on trend
    if (trend !== 'neutral') {
      const glowIntensity = 0.12;
      panel.material.opacity = glowIntensity;
      border.material.color.setHex(trend === 'up' ? 0x00ff88 : 0xff4444);
      
      // Animate the glow
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / 800, 1); // 800ms animation
        const opacity = glowIntensity * (1 - progress * 0.6);
        
        panel.material.opacity = Math.max(opacity, 0.04);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Reset to original color
          border.material.color.setHex(panelGroup.userData.coin === 'ethereum' ? 0x627eea : 0xf7931a);
        }
      };
      animate();
    }
  }, [createTextTexture]);

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance" 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const pointLight1 = new THREE.PointLight(0x627eea, 0.3, 8);
    pointLight1.position.set(-1.5, 1, 2);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0xf7931a, 0.3, 8);
    pointLight2.position.set(1.5, -1, 2);
    scene.add(pointLight2);

    // Create price panels (closer together)
    const ethPanel = createCompactPanel('ethereum', { x: -1.2, y: 0, z: 0 });
    const btcPanel = createCompactPanel('bitcoin', { x: 1.2, y: 0, z: 0 });
    
    scene.add(ethPanel);
    scene.add(btcPanel);
    
    ethPanelRef.current = ethPanel;
    btcPanelRef.current = btcPanel;

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      // Gentle rotation
      if (ethPanelRef.current) {
        ethPanelRef.current.rotation.y += 0.003;
        ethPanelRef.current.rotation.x = Math.sin(Date.now() * 0.0008) * 0.05;
      }
      
      if (btcPanelRef.current) {
        btcPanelRef.current.rotation.y -= 0.003;
        btcPanelRef.current.rotation.x = Math.cos(Date.now() * 0.0008) * 0.05;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initial price fetch
    fetchPrices();
    
    // Set up price update interval (2 minutes)
    intervalRef.current = setInterval(fetchPrices, 120000);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js resources
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => {
              if (material.map) material.map.dispose();
              material.dispose();
            });
          } else {
            if (object.material.map) object.material.map.dispose();
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, [createCompactPanel, fetchPrices]);

  // Update panels when prices change
  useEffect(() => {
    if (ethPanelRef.current && prices.ethereum.current > 0) {
      updatePanel(ethPanelRef.current, prices.ethereum);
    }
    if (btcPanelRef.current && prices.bitcoin.current > 0) {
      updatePanel(btcPanelRef.current, prices.bitcoin);
    }
  }, [prices, updatePanel]);

  return (
    <div className={`crypto-price-widget relative ${className}`}>
      {/* 3D Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-32 md:h-40 rounded-lg overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(20,20,30,0.6) 0%, rgba(10,10,20,0.7) 100%)' }}
      />
      
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <div className="text-white text-sm font-mono">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default CompactCryptoWidget;