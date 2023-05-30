import React, {useState, useRef} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import * as THREE from "three"

const Box = () => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const a = new THREE.Vector3(1, 0, 0);
    const b = new THREE.Vector3(0, 0, 1);
    const c = a.clone().cross(b);
    const origin = new THREE.Vector3(3, 0, 0)

    useFrame(() => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
    }, []);

    return (
        <>
            <mesh
                ref={ref}
                onPointerOver={() => setIsHovered(true)}
                onPointerOut={() => setIsHovered(false)}
            >
                <boxBufferGeometry args={isHovered ? [1.2, 1.2, 1.2] : [1, 1, 1]}/>
                <meshLambertMaterial color={isHovered ? 0x44c2b5 : 0x9178e6}/>
            </mesh>
            <arrowHelper args={[a, origin, 1, 0x005DFF]}/>
            <arrowHelper args={[b, origin, 1, 0x005DFF]}/>
            <arrowHelper args={[c, origin, 1, 0x005DFF]}/>
        </>
    );
};

const Main = (props) => {
    return (
        <>
            <p>{props.name}</p>
            <Canvas dpr={2}>
                <color attach="background" args={[0xf5f3fd]}/>
                <ambientLight intensity={0.5}/>
                <directionalLight intensity={0.5} position={[-10, 10, 10]}/>
                <Box/>
            </Canvas>
        </>
    );
}

export default Main