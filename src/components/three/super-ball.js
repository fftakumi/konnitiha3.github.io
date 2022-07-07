import React, {useRef} from "react";
import { Canvas, useFrame} from "@react-three/fiber";
import {Vector3} from "three";
import { OrbitControls, TransformControls, RoundedBox} from '@react-three/drei'
import {canvasSquare} from "./three.module.css"

function Ground({ color, ...props }) {
  return (
    <RoundedBox receiveShadow castShadow smoothness={10} radius={0.015} {...props}>
      <meshStandardMaterial color={color} envMapIntensity={0.5} />
    </RoundedBox>
  )
}

const World = () => {
  const g = new Vector3(0,0,-9.8)
  let t = 0

  const ball = useRef(null)
  const v0 = new Vector3(0,0,0)
  let v = v0.clone()
  const r = 1
  const e = -0.6 //反発係数

  const ground = useRef(null)
  const ground_z = 0

  useFrame((state, delta) => {
    t += delta
    v = v.clone().add(g.clone().multiplyScalar(delta))
    ball.current.position.x += v.x * delta
    ball.current.position.y += v.y * delta
    ball.current.position.z += v.z * delta

    if (ball.current.position.z - r <= 0) {
      ball.current.position.z = r + ground_z
      v = v.clone().multiplyScalar(e)
      t=0
    }
  })
  return(
    <>
      <mesh ref={ball}  position={[0,0,10]}>
        <sphereGeometry args={[r ,16, 16]} />
        <meshStandardMaterial color="hotpink"/>
      </mesh>
      <Ground ref={ground} color="hotpink" position-z={ground_z-0.2} scale={[40, 40, 0.2]} />
    </>
  )
}

const SuperBall = () => {
  const mesh = useRef(null)
  return (
    <div id="canvas-container" className={canvasSquare}>
      <Canvas camera={{ position: [0, -50, 30], fov: 42 }}>
        <color attach="background" args={[0xf5f3fd]} />
        <directionalLight position={[-50, 0, 30]} castShadow intensity={1} shadow-camera-far={70} />
        <TransformControls mode="translate">
          <World/>
        </TransformControls>
        <OrbitControls/>
      </Canvas>
    </div>
  );
};

export default SuperBall