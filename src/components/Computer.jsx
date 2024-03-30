import React, { useState } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

// function Comp() {

//   const { nodes, materials } = useGLTF('./gltfs/computer/scene.gltf')
//   return (
//     <group dispose={null}  >
//       <group rotation={[-Math.PI / 2, 0, 0]} scale={0.0065} >
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group rotation={[-Math.PI / 2, 0, 0]}>
//             <mesh geometry={nodes.defaultMaterial.geometry} material={materials.default_1001} />
//             <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.default_1005} />
//             <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.default_1002} />
//             <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.default_1004} />
//             <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.default_1003} />
//             <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials.default_1006} />
//             <mesh geometry={nodes.defaultMaterial_6.geometry} material={materials.default_1007} />
//           </group>
//         </group>
//       </group>
//     </group>
//   )
// }


function Buggati() {
  const { nodes, materials } = useGLTF('./bugati_divo/scene.gltf')
  return (
    <>
    <group  dispose={null} scale={0.15} rotateOnAxis={[0, 0 ,0]} rotation={[0.2, 0.9,0.2]} >
      <mesh geometry={nodes.Object_4.geometry} material={materials.material} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.material_1} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.material_2} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.material_3} position={[8.147, 4.042, -14.947]} rotation={[Math.PI / 2, 0, 0]} scale={[-11.232, 11.232, 11.232]} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.material_4} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_14.geometry} material={materials['1920']} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_16.geometry} material={materials['1213']} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_18.geometry} material={materials['891011']} position={[8.147, 4.02, -16.555]} rotation={[Math.PI / 2, 0, 0]} scale={[-11.232, 11.232, 11.232]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.material_8} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials['71415']} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_24.geometry} material={materials['1920']} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_26.geometry} material={materials['71415']} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.material_2} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_30.geometry} material={materials['891011']} position={[8.147, 4.02, -16.555]} rotation={[Math.PI / 2, 0, 0]} scale={[-11.232, 11.232, 11.232]} />
      <mesh geometry={nodes.Object_32.geometry} material={materials['71415']} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_34.geometry} material={materials['1213']} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.material_10} position={[-0.003, 1.646, 0.16]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.151, 10.151, 10.151]} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.material_3} position={[8.147, 3.853, 12.571]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.692, 10.692, 10.692]} />
      <mesh geometry={nodes.Object_40.geometry} material={materials['891011']} position={[8.147, 3.832, 10.963]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.692, 10.692, 10.692]} />
      <mesh geometry={nodes.Object_42.geometry} material={materials['891011']} position={[8.147, 3.832, 10.963]} rotation={[Math.PI / 2, 0, 0]} scale={[-10.692, 10.692, 10.692]} />
    </group>


    </>
  )
}

const Computer = () => {

  const show = Math.random()


  return (
    <>
      <Canvas shadows className='computerCanvas'>
          <Suspense fallback={null}>
              <ambientLight />
              <pointLight position={[-0.003, 1.646, 0.16]} intensity={10} />
              <pointLight position={[10, 10, 10]} intensity={2500} />
              <pointLight position={[-10, -10, -10]} intensity={2000} />
              <pointLight position={[10, 10, -10]} intensity={250} />
              <pointLight position={[10, -10, -10]} intensity={250} />
              <pointLight position={[-10, 10, 10]} intensity={250} />
              <pointLight position={[-10, -10, 10]} intensity={250} />
              <Buggati />
              <OrbitControls enableZoom={false}  />
          </Suspense>
      </Canvas>
      
      <p>Drag to Move around </p>
      {
        show > 0.5 ?
       <a target='_blank' href='https://sketchfab.com/3d-models/ibm-pcjr-4863-computer-freepolyorg-1c3c3cd0643d44d49a1771048da74c62'>Computer by Freepoly.org</a>
        :
       <a target='_blank' href='https://sketchfab.com/3d-models/bugati-divo-dca375fefc65461d8a383172b235d0a9'>Buggati Divo by Jonrss</a>
      }

    </>

  )
}


export default Computer