/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: moyicat (https://sketchfab.com/moyicat)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/the-great-sorcerers-room-4a26317612b14bef831b1b3305e20c1c
title: The Great Sorcerer’s Room
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
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

useGLTF.preload('/scene.gltf')
