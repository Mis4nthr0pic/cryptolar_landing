import React from 'react';

const StarknetBackgroundSimple = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 opacity-50">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-500/20 to-blue-600/20 animate-pulse"></div>
        
        {/* Zero-Knowledge Proof Elements */}
        {[
          // Mathematical formulas and ZK symbols
          'π(x,w) = 1', '∃w: R(x,w)', 'zk-SNARK', 'H(x) = y', 'σ = (A,B,C)', 
          'Δ ∈ Zp', '∏ᵢ gᵢʳⁱ', 'e(g,h)', '≡ 1 (mod p)', 'P(X) = Σ', 
          'ZKP', 'STARK', 'Merkle', '∀x ∈ F', 'ω^n = 1', 'FFT', 
          'Fiat-Shamir', 'r ← Zₚ', '⊕', 'H₂₅₆', 'Poseidon', 'Cairo'
        ].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-center font-mono select-none pointer-events-none"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              fontSize: `${Math.random() * 20 + 14}px`,
              color: ['#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#6366f1', '#3b82f6'][Math.floor(Math.random() * 6)],
              textShadow: `
                0 0 ${Math.random() * 15 + 10}px currentColor,
                0 0 ${Math.random() * 25 + 15}px currentColor
              `,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `zkFloat${(i % 4) + 1} ${Math.random() * 8 + 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
              filter: `blur(${Math.random() * 1}px)`,
              fontWeight: Math.random() > 0.5 ? 'bold' : 'normal',
              background: i % 3 === 0 ? `linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent)` : 'transparent',
              padding: '4px 8px',
              borderRadius: '4px',
              border: i % 4 === 0 ? '1px solid rgba(139, 92, 246, 0.3)' : 'none'
            }}
          >
            {symbol}
          </div>
        ))}
        
        {/* Mathematical proof symbols */}
        {['∀', '∃', '∈', '∉', '⊂', '⊃', '∩', '∪', '∅', '∞', '∇', '∂', '∑', '∏', '∫'].map((mathSymbol, i) => (
          <div
            key={`math-${i}`}
            className="absolute text-center select-none pointer-events-none"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
              color: ['#a855f7', '#d946ef', '#ec4899'][Math.floor(Math.random() * 3)],
              textShadow: `0 0 ${Math.random() * 20 + 15}px currentColor`,
              opacity: Math.random() * 0.4 + 0.2,
              animation: `mathFloat ${Math.random() * 10 + 8}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.8})`,
              fontFamily: 'serif'
            }}
          >
            {mathSymbol}
          </div>
        ))}
      </div>
    </div>
  )
}

export default StarknetBackgroundSimple