import React, {useEffect, useRef, useState} from "react";
import * as THREE from 'three'
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, TransformControls, ContactShadows, useGLTF, useCursor} from '@react-three/drei'
import {canvasSquare} from "./three.module.css"

const LLG = (props) => {
    const refArrowBeff = useRef(null)
    const refArrowM = useRef(null)
    const refArrowTorque = useRef(null)
    const refArrowDamping = useRef(null)

    const origin = new THREE.Vector3(0, 0, 0);

    const vecBeff = new THREE.Vector3(0, 2, 0);
    const colorBeff = 0x0019D8;　　　　　　　　　　　　　//矢印の色

    let alpha = 0.01;
    let gamma = 1;
    let Ms = 1
    const vecM = new THREE.Vector3(1, -1, 0)
    vecM.setLength(Ms)
    const colorM = 0xFF0000;


    const vecTorque = vecM.clone().multiplyScalar(-gamma / (1 + alpha ** 2)).cross(vecBeff);
    const colorTorque = 0x005DFF;

    const vecDamping = vecM.clone().cross(vecTorque).multiplyScalar(alpha)
    const colorDamping = 0x005DFF;

    useFrame((state, delta, frame) => {
        vecBeff.setY(parseFloat(props.Beff.current.value))
        refArrowBeff.current?.setDirection(vecBeff);
        refArrowBeff.current?.setLength(vecBeff.length())

        gamma = parseFloat(props.gamma.current.value)
        alpha = parseFloat(props.alpha.current.value)

        const k1 = vecM.clone().multiplyScalar(-gamma / (1 + alpha ** 2)).cross(vecBeff);
        k1.add(vecM.clone().cross(k1).multiplyScalar(alpha))
        k1.multiplyScalar(delta)

        const vecM_k1 = vecM.clone().add(k1.clone().divideScalar(2));
        const k2 = vecM_k1.clone().multiplyScalar(-gamma / (1 + alpha ** 2)).cross(vecBeff);
        k2.add(vecM_k1.cross(k2).multiplyScalar(alpha));
        k2.multiplyScalar(delta);

        const vecM_k2 = vecM.clone().add(k2.clone().divideScalar(2));
        const k3 = vecM_k2.clone().multiplyScalar(-gamma / (1 + alpha ** 2)).cross(vecBeff);
        k3.add(vecM_k2.cross(k3).multiplyScalar(alpha));
        k3.multiplyScalar(delta);

        const vecM_k3 = vecM.clone().add(k3)
        const k4 = vecM_k3.clone().multiplyScalar(-gamma / (1 + alpha ** 2)).cross(vecBeff);
        k4.add(vecM_k2.cross(k4).multiplyScalar(alpha));
        k4.multiplyScalar(delta);

        const k = k1.clone().add(k2.multiplyScalar(2))
        k.add(k3.multiplyScalar(2))
        k.add(k4)
        k.divideScalar(6)

        vecM.add(k)
        vecM.setLength(Ms)

        refArrowM.current?.setDirection(vecM);
        refArrowM.current?.setLength(vecM.length());

        let tmp = vecM.clone();
        tmp.multiplyScalar(-gamma / (1 + alpha ** 2)).cross(vecBeff);
        vecTorque.set(tmp.x, tmp.y, tmp.z)
        refArrowTorque.current?.setDirection(vecTorque);
        refArrowTorque.current?.setLength(vecTorque.length())
        refArrowTorque.current?.position.set(vecM.x, vecM.y, vecM.z)

        tmp = vecM.clone().cross(tmp).multiplyScalar(alpha)
        vecDamping.set(tmp.x, tmp.y, tmp.z)
        refArrowDamping.current?.setDirection(vecDamping);
        refArrowDamping.current?.setLength(vecDamping.length());
        refArrowDamping.current?.position.set(vecM.x, vecM.y, vecM.z)
    }, [])

    return (
        <>
            <arrowHelper ref={refArrowBeff} args={[vecBeff, origin, vecBeff.length(), colorBeff]}/>
            <arrowHelper ref={refArrowM} args={[vecM, origin, vecM.length(), colorM]}/>
            <arrowHelper ref={refArrowTorque} args={[vecTorque, vecM, vecTorque.length(), colorTorque]}/>
            <arrowHelper ref={refArrowDamping} args={[vecDamping, vecM, vecDamping.length(), colorDamping]}/>
        </>
    );
};

const Display = () => {
    const BeffRef = useRef(null)
    const alpheRef = useRef(null)
    const gammaRef = useRef(null)
    useEffect(() => {
        BeffRef.current.value = 1
        alpheRef.current.value = 0.1
        gammaRef.current.value = 0.01
    }, [])
    return (
        <p>
            <div className={canvasSquare}>
                <label>alpha:<input ref={alpheRef} type="number" name="alpha" step="0.01"/></label> <br/>
                <label>gamma:<input ref={gammaRef} type="number" name="gamma" step="0.01"/></label> <br/>
                <label>Beff:<input ref={BeffRef} type="range" name="Beff" min="-2" max="2" step="0.01"/></label> <br/>
                <Canvas>
                    <color attach="background" args={[0xf5f3fd]}/>
                    <LLG Beff={BeffRef} alpha={alpheRef} gamma={gammaRef}/>
                    <OrbitControls/>
                </Canvas>
            </div>
        </p>
    )
}

export default Display