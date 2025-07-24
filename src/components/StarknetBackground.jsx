import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Floating sphere component
function FloatingSphere({ position, scale, color, speed }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.2
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.005 * speed
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial 
        color={color}
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

// Background gradient component
function BackgroundGradient() {
  const meshRef = useRef()
  
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `
  
  const fragmentShader = `
    varying vec2 vUv;
    uniform float time;
    
    void main() {
      vec2 uv = vUv;
      
      // Create flowing gradient
      float gradient1 = sin(uv.y * 3.14159 + time * 0.5) * 0.5 + 0.5;
      float gradient2 = cos(uv.x * 3.14159 + time * 0.3) * 0.5 + 0.5;
      
      // Starknet colors - purple, pink, blue
      vec3 color1 = vec3(0.4, 0.2, 0.8); // Purple
      vec3 color2 = vec3(0.8, 0.3, 0.6); // Pink
      vec3 color3 = vec3(0.2, 0.4, 0.9); // Blue
      
      vec3 finalColor = mix(
        mix(color1, color2, gradient1),
        color3,
        gradient2 * 0.5
      );
      
      // Add depth fade
      float depthFade = 1.0 - length(uv - 0.5) * 0.8;
      finalColor *= depthFade;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
  
  const uniforms = useMemo(() => ({
    time: { value: 0 }
  }), [])
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.time.value = state.clock.elapsedTime
    }
  })
  
  return (
    <mesh ref={meshRef} position={[0, 0, -10]} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

// Main spheres component
function FloatingSpheres() {
  const spheres = useMemo(() => {
    const sphereArray = []
    const colors = [
      new THREE.Color(0x6366f1), // Indigo
      new THREE.Color(0x8b5cf6), // Violet
      new THREE.Color(0xa855f7), // Purple
      new THREE.Color(0xd946ef), // Fuchsia
      new THREE.Color(0xec4899), // Pink
      new THREE.Color(0x3b82f6), // Blue
    ]
    
    for (let i = 0; i < 25; i++) {
      sphereArray.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6
        ],
        scale: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.8 + 0.2
      })
    }
    return sphereArray
  }, [])

  return (
    <>
      {spheres.map((sphere, index) => (
        <FloatingSphere
          key={index}
          position={sphere.position}
          scale={sphere.scale}
          color={sphere.color}
          speed={sphere.speed}
        />
      ))}
    </>
  )
}

// Main Starknet Background component
const StarknetBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <BackgroundGradient />
        <FloatingSpheres />
      </Canvas>
    </div>
  )
}

export default StarknetBackground