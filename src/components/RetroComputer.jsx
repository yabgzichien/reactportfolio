import { useGLTF, OrbitControls, Environment } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import "../css/Computer.css"

function Model({ url }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={[4, 4, 4]} position={[0, 0, 0]} />
}


const RetroComputer =  () => {
  return (
    <div className='compDiv' >
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>

        <ambientLight intensity={0.8} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.5}
          castShadow
        />
        
        <OrbitControls 
          enableZoom={false}
          minDistance={2}
          maxDistance={6}
        />

        <Suspense fallback={null}>
          <Model url='./retro_computer/scene.gltf' />
        </Suspense>
      </Canvas>
      <p>Computer 3D Model from: <a href='https://sketchfab.com/3d-models/retro-computer-9439cb5e09cc44caa63dfbfb299df45f'>Sketchfab</a> </p>
    </div>
  )
}

export default RetroComputer