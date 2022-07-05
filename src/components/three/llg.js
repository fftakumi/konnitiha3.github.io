import React from "react";
import { Canvas } from "@react-three/fiber";

const LLG = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <boxGeometry  args={[2, 2, 2]} />
          <meshStandardMaterial />
          <arrowHelper/>
        </mesh>
      </Canvas>
    </div>
  );
};

export default LLG