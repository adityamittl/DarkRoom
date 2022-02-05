import React, { Suspense, useRef, useState } from "react"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, useAnimations } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  current: null,
})

function Model({ ...props }) {

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/the_great_sorcerers_room/scene.gltf')
  const [hovered, set] = useState(null)
  console.log(hovered)
  return (
    <group ref={group} {...props} dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-3, 2, 1]}>
          <mesh geometry={nodes.__JoinWall01003_0.geometry} material={materials['baked_Wall01.002']} />
        </group>
        <group position={[-0.5, 1.5, 1.7]} />
        <group position={[2, -5, -0.2]} scale={[4, 2, 1]}>
          <mesh geometry={nodes.__JoinFloor003_0.geometry} material={materials.baked_Floor} />
        </group>
        <group position={[-3, 2, -0.2]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 1, 1.4]}>
          <mesh geometry={nodes.__JoinWall02003_0.geometry} material={materials.baked_Wall02} />
        </group>
        <group position={[2, -5, -0.2]} scale={[4, 9, 3.5]}>
          <mesh geometry={nodes.__JoinBase003_0.geometry} material={materials.baked_Base} />
        </group>
        <group position={[2, -1, 1]} rotation={[0, 0, Math.PI / 6]}>
          <mesh geometry={nodes.__JoinStandAlone003_0.geometry} material={materials.baked_StandAlone} />
        </group>
        <group position={[-1, -3, 1]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.__JoinPlants003_0.geometry} material={materials.baked_WallandPlants} />
        </group>
        <group position={[3, 4, 1]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.__JoinCabinet003_0.geometry} material={materials.baked_Cabinet} />
        </group>
        <group position={[-1, 1, 1]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes.__JoinFirePlace003_0.geometry} material={materials.baked_FirePlace} />
        </group>
        <group position={[3, 4, 1]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.__JoinDesk003_0.geometry} material={materials.baked_Desk} />
        </group>
        <group position={[5.57, -4.57, 0.5]} scale={[1.17, 1.17, 1.13]}>
          <mesh geometry={nodes.__JoinBarrels003_0.geometry} material={materials.baked_Barrels} />
        </group>
      </group>
    </group>
  )
}

function Details() {

  const snap = useSnapshot(state)

  return (
    <div>{snap.current}</div>
    // baked_StandAlone == piyano     baked_Desk == desk   baked_Floor == Floor    baked_Cabinet == Cabinet    baked_Barrels==Flask    baked_FirePlace == Fireplace      baked_Wall01.002 == Window   baked_WallandPlants == Arms on the wall
  )
}

export default function MystryRoom() {
  return (
    <div className="">

      <div className="w-full h-screen outline-none cursor-grab lg:block">
        {/* <Canvas shadows dpr={[1, 2]} camera={{ position: [10, 6, 3], fov: 50 }}> */}
        <Canvas shadows dpr={[1, 2]} camera={{ position: [6, 6, 6], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model scale={1.2} />
            <Environment preset="city" />
            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>

      <div className="absolute top-20 right-3 z-100 bg-white px-2 py-1 rounded-lg text-3xl">
        <Details />
      </div>      

    </div>

  )
}
