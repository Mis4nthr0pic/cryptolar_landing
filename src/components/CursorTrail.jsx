import React, { useEffect, useState, useRef } from 'react';

const CursorTrail = () => {
  const [trails, setTrails] = useState([])
  const trailIdCounter = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      trailIdCounter.current++
      const trail = {
        id: `trail-${Date.now()}-${trailIdCounter.current}`,
        x: e.clientX,
        y: e.clientY
      }
      
      setTrails(prevTrails => [...prevTrails.slice(-8), trail])
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTrails(prevTrails => prevTrails.slice(1))
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            opacity: (index + 1) / trails.length * 0.7,
            transform: `scale(${(index + 1) / trails.length})`
          }}
        />
      ))}
    </div>
  )
}

export default CursorTrail