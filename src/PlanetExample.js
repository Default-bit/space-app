import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"
import "./Example.css"

import * as React from "react";
import exportAsImage from "./utils/exportAsImage";

const state = proxy({
  current: null,
  items: {
    surfaceS1: "#ffffff",
    land: "#ffffff",
    caps: "#ffffff",
    topland: "#ffffff",
    ring: "#ffffff"
  },
})

function Planets({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('planettwo.glb')
    return (
      <group ref={group} {...props} dispose={null}>
        <group scale={0.2}>
        {/* Mercury */}
        <mesh geometry={nodes.Icosphere002.geometry} material={materials.surfaceM1} />
        <mesh geometry={nodes.Icosphere002_1.geometry} material={materials.surfaceM2} />
        {/* Venus */}
        <mesh geometry={nodes.Sphere007.geometry} material={materials.surfaceV1} />
        <mesh geometry={nodes.Sphere007_1.geometry} material={materials.surfaceV2} />
        <mesh geometry={nodes.Sphere007_2.geometry} material={materials.surfaceV3} />
        <mesh geometry={nodes.Sphere007_3.geometry} material={materials.surfaceV4} />
        <mesh geometry={nodes.Sphere007_4.geometry} material={materials.surfaceV5} />
        <mesh geometry={nodes.Sphere007_5.geometry} material={materials.surfaceV6} />
        {/* Earth */}
        <mesh geometry={nodes.Icosphere003.geometry} material={materials.surfaceE1} />
        <mesh geometry={nodes.Icosphere003_1.geometry} material={materials.surfaceE2} />
        <mesh geometry={nodes.Icosphere003_2.geometry} material={materials.surfaceE3} />
        {/* Mars */}
        <mesh geometry={nodes.Sphere006.geometry} material={materials.surfaceMs1} />
        <mesh geometry={nodes.Sphere006_1.geometry} material={materials.surfaceMs2} />
        <mesh geometry={nodes.Sphere006_2.geometry} material={materials.surfaceMs3} />
        {/* Jupiter */}
        <mesh geometry={nodes.Sphere003.geometry} material={materials.surfaceJ1} />
        <mesh geometry={nodes.Sphere003_1.geometry} material={materials.surfaceJ2} />
        <mesh geometry={nodes.Sphere003_2.geometry} material={materials.surfaceJ3} />
        <mesh geometry={nodes.Sphere003_3.geometry} material={materials.craterJ1} />
        <mesh geometry={nodes.Sphere003_4.geometry} material={materials.craterJ2} />
        {/* Saturn */}
        <mesh geometry={nodes.Icosphere001.geometry} material={materials.surfaceS1} />
        <mesh geometry={nodes.Icosphere001_1.geometry} material={materials.surfaceS2} />
        <mesh geometry={nodes.Icosphere001_2.geometry} material={materials.ringS2} />
        <mesh geometry={nodes.Icosphere001_3.geometry} material={materials.ringS1} />
        <mesh geometry={nodes.Icosphere001_4.geometry} material={materials.ringS3} />
        {/* Uranus */}
        <mesh geometry={nodes.Sphere004.geometry} material={materials.surfaceU1} />
        <mesh geometry={nodes.Sphere004_1.geometry} material={materials.ringU1} />
        <mesh geometry={nodes.Sphere004_2.geometry} material={materials.surfaceU2} />
        <mesh geometry={nodes.Sphere004_3.geometry} material={materials.surfaceU3} />
        <mesh geometry={nodes.Sphere004_4.geometry} material={materials.surfaceU4} />
        {/* Neptune */}
        <mesh geometry={nodes.Sphere005.geometry} material={materials.surfaceN1} />
        <mesh geometry={nodes.Sphere005_1.geometry} material={materials.surfaceN2} />
        <mesh geometry={nodes.Sphere005_2.geometry} material={materials.surfaceN3} />
        <mesh geometry={nodes.Sphere005_3.geometry} material={materials.surfaceN4} />
        <mesh geometry={nodes.Sphere005_4.geometry} material={materials.surfaceN5} />
        <mesh geometry={nodes.Sphere005_5.geometry} material={materials.surefaceN6} />
        </group>
      </group>
    )
}


  function Planet2({ ...props }) {
    const ref = useRef()
    const snap = useSnapshot(state)

    useFrame((state) => {
      const t = state.clock.getElapsedTime()
      ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
      ref.current.rotation.x = Math.cos(t / 4) / 8
      ref.current.rotation.y = Math.sin(t / 4) / 8
      ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })

    const [hovered, set] = useState(null)
    useEffect(() => {
      const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
      const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
      if (hovered) {
        document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
        return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
      }
    }, [hovered])

    const { nodes, materials } = useGLTF('allPlanets2.glb')
    return (
      <group
      ref={ref}
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}>
        <group scale={0.2}>
        {/* <mesh geometry={nodes.Icosphere_1.geometry} material={materials.sea} material-color={snap.items.sea}/>
        <mesh geometry={nodes.Icosphere_2.geometry} material={materials.land} material-color={snap.items.land}/>
        <mesh geometry={nodes.Icosphere_3.geometry} material={materials.topland} material-color={snap.items.topland}/> */}
        <mesh geometry={nodes.Icosphere001.geometry} material={materials.surfaceS1} material-color={snap.items.surfaceS1} />
        <mesh geometry={nodes.Icosphere001_1.geometry} material={materials.surfaceS2} material-color={snap.items.land}/>
        <mesh geometry={nodes.Icosphere001_2.geometry} material={materials.ringS2} material-color={snap.items.topland}/>
        <mesh geometry={nodes.Icosphere001_3.geometry} material={materials.ringS1} material-color={snap.items.caps}/>
        <mesh geometry={nodes.Icosphere001_4.geometry} material={materials.ringS3} material-color={snap.items.ring}/>
        </group>
      </group>
    )
  }


  function Picker() {
    const snap = useSnapshot(state)
    return (
      <div style={{ display: snap.current ? "flex" : "none" }} className="pickerAndText">
        <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
        <h1 className="exampleH1">{snap.current}</h1>
      </div>
    )
  }

export default function PlanetExample() {
  const canvasRef = useRef(null);
  return (
    <>
<div className="columnDiv">
      <Picker />
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }} gl={{ preserveDrawingBuffer: true }} ref={canvasRef}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <Planet2/>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
      </Canvas>
      <button
          className="btn-make-planet"
          onClick={() => exportAsImage(canvasRef.current, "test")}
        >
          Capture Image
      </button>
      </div>
    </>
  )
}




// START START START START

