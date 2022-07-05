import React, {useRef} from "react";
import { Canvas, useThree} from "@react-three/fiber";
import { OrbitControls, TransformControls, ContactShadows, useGLTF, useCursor } from '@react-three/drei'

const LLG = () => {
  const mesh = useRef(null)
  return (
    <div id="canvas-container">
      <Canvas>
        <TransformControls object={mesh} mode="translate">
        <mesh ref={mesh}>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <boxGeometry  args={[2, 2, 2]} />
          <meshStandardMaterial />
          <arrowHelper/>
        </mesh>
        </TransformControls>
        <OrbitControls/>
      </Canvas>
    </div>
  );
};

export default LLG