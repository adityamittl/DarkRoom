import React, { Suspense, useRef, useState } from "react"
import { HiX } from "react-icons/hi";
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
    // QR Code: https://storage.echo3d.co/morning-hill-2019/ef8b7d4c-4468-40d0-aab6-8a4ef7bf1df7.png
    // URL: https://go.echo3d.co/S3Xc
  )
}

export default function MystryRoom() {

  const [showCode, setShowCode] = React.useState(false);

  const [counter, setCounter] = useState(0);

  const ref = useRef(null);
  const refDesk = useRef(null);

  const [message, setMessage] = useState("");
  const [messageDesk, setMessageDesk] = useState("");

  const [valid, setValid] = useState(false);
  const [validDesk, setValidDesk] = useState(false);

  const getInputValue = (e) => {
    e.preventDefault();
    const userValue = ref.current.value;
    if (userValue === "Globe") {
      setValid(true);
      setMessage("You got the right answer!");
      setCounter(counter + 10);
    }
    else {
      setValid(false);
      setMessage("Wrong answer! Try again!");
    }
  }

  const getInputValueDesk = (e) => {
    e.preventDefault();
    const userValueDesk = refDesk.current.value;
    if (userValueDesk === "Desk") {
      setValidDesk(true);
      setMessageDesk("You got the right answer!");
      setCounter(counter + 10);
    }
    else {
      setValidDesk(false);
      setMessageDesk("Wrong answer! Try again!");
    }
  }

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

      <div className="absolute top-24 right-3 bg-white px-2 py-1 rounded-lg text-xl text-center cursor-pointer" onClick={() => setShowCode(true)}>
        {/* <Details /> */}
        Give answers
      </div>

      {showCode ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-white">
            <div className="relative my-6 w-128">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-gray-800 bg-secondary outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-solid rounded-t">
                  <div className="text-3xl font-base tracking-wide">
                    Give answers
                  </div>

                  <button className="absolute right-6" onClick={() => setShowCode(false)} aria-label="button">
                    <HiX className="h-7 w-7" aria-hidden="false" />
                  </button>

                </div>

                <div className="grid justify-center">
                  <div className="inline-flex w-96 h-1 bg-indigo-500 rounded-full"></div>
                </div>

                <div className="grid place-items-center text-xl py-2 gap-2 mx-2 w-full mb-4">
                  <p className=''>Fill up the input with the name of objects in he room by solving th riddles</p>

                  Total points: {counter}

                  <div className="grid place-items-center text-xl py-2 gap-2 mx-2 w-full mb-4">

                    <div className="mt-4 outline-transparent outline flex flex-row place-items-center mx-12">
                      <p className="">I show all the world, I show the oceans, I show each sea, Who am I?</p>
                      <input ref={ref} onChange={getInputValue} placeholder="Type the code here" type="text" className="block w-56 pb-2 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none text-center" />
                    </div>
                    <div className='text-left'>
                      {message && <div>
                        <p className={valid ? "text-green-500 " : "text-red-400"} >{message}</p>
                      </div>}
                    </div>

                    <div className="mt-4 outline-transparent outline flex flex-row place-items-center mx-12">
                      <p className="">Skip to the place of work, Touch nothing but look near, On the surface I do lurk, Find me right on here</p>
                      <input ref={refDesk} onChange={getInputValueDesk} placeholder="Type the code here" type="text" className="block w-56 pb-2 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none text-center" />
                    </div>
                    <div className='text-center'>
                      {messageDesk && <div>
                        <p className={validDesk ? "text-green-500 " : "text-red-400"} >{messageDesk}</p>
                      </div>}
                    </div>

                    <div className="mt-4 outline-transparent outline flex flex-row place-items-center mx-12">
                      <p className="">It is all in black and white, I move with sound and might, The key is sing on sight, The prize here does alight</p>
                      <input placeholder="Type the code here" type="text" className="block w-56 pb-2 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none text-center" />
                    </div>
                    {/* <div className='text-center'>
                      {messageDesk && <div>
                        <p className={validDesk ? "text-green-500 " : "text-red-400"} >{messageDesk}</p>
                      </div>}
                    </div> */}

                    <div className="mt-4 outline-transparent outline flex flex-row place-items-center mx-12">
                      <p className="">Go through the place, That hosts the chairs. The prize is hidden, On the…?????</p>
                      <input placeholder="Type the code here" type="text" className="block w-56 pb-2 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none text-center" />
                    </div>
                    {/* <div className='text-center'>
                      {messageDesk && <div>
                        <p className={validDesk ? "text-green-500 " : "text-red-400"} >{messageDesk}</p>
                      </div>}
                    </div> */}


                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
        </div>
      ) : null}

      <div className="group absolute w-48 top-24 left-3 z-100 text-blue-700">
        <h1 className="bg-white px-2 py-1 rounded-lg text-xl text-center cursor-pointer">
          View in AR
        </h1>
        <div className="mt-2 hover-target grid place-items-center invisible group-hover:visible bg-white rounded-lg w-96">
          <p className="self-center mx-8 text-xl tracking-wide text-justify pt-2">To view the 3D model in AR, scan the QR code or click on the button below.</p>

          <div className="grid justify-center grid-cols-1 gap-2 mx-8 md:grid-cols-2">
            <img className="flex p-2 text-6xl rounded-xl h-40 w-40" src="https://storage.echo3d.co/morning-hill-2019/ef8b7d4c-4468-40d0-aab6-8a4ef7bf1df7.png" alt="QR Code" />
            <a href="https://go.echo3d.co/S3Xc" target="_blank" rel="noreferrer">
              <button className="px-8 ml-8 text-lg font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500  hover:shadow-lg">View in AR</button>
            </a>
          </div>
        </div>
      </div>

    </div>

  )
}
