"use client"

import React, { useRef, useState, useEffect, Suspense } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Sphere } from '@react-three/drei';
import { OrbitControls } from "@react-three/drei";
// import GltfModel from "./BOX.gltf";

const initialPosition = [0, 0, 0];
const initialRotation = [0.25, 0, -0.1];
const initialScale = 25;
const spotlight1={
    intensity:10,
    x: 5,
    y: 5,
    z: 5,
};
const spotlight2={
    intensity:10,
    x: -5,
    y: -5,
    z: -5,
};


const GltfModel = ({ modelPath, scale = 25, position = [0, 0, 0], initialRotation = [0, 0, 0] }) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, hover] = useState(false);

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += 0.001;
        }
    });

    // Effect to set initial rotation
    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = initialRotation[0];
            ref.current.rotation.y = initialRotation[1];
            ref.current.rotation.z = initialRotation[2];
        }
    }, [initialRotation]);

    return (
        <>
        <primitive
            ref={ref}
            object={gltf.scene}
            position={position}
            scale={hovered ? scale * 1.01 : scale} // Slightly increase scale when hovered
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        />
        </>
    );
};

const ModelViewer = ({ modelPath, scale = 25, position = [0, 0, 0], initialRotation }) => {
    // const rotation = [0.3, 0, -0.1]; // 将90度转换为弧度

// const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
    return (
        <Canvas>
            <ambientLight intensity={1} /> {/* 调整环境光强度 */}

            {/* 调整聚光灯强度和位置 */}
            {/* <spotLight intensity={1} position={[spotlight.x, spotlight.y, spotlight.z]} angle={3.14/2} penumbra={1} /> */}
            <spotLight 
              intensity={spotlight1.intensity} // 增加了光照强度
              position={[spotlight1.x, spotlight1.y, spotlight1.z]} // 将光源移远一些
              angle={Math.PI} // 将角度调整为180度
              penumbra={1}
              decay={0} // 如果支持的话，增加光照的衰减
            />
            <spotLight 
              intensity={spotlight2.intensity} // 增加了光照强度
              position={[spotlight2.x, spotlight2.y, spotlight2.z]} // 将光源移远一些
              angle={Math.PI} // 将角度调整为180度
              penumbra={1}
              decay={0} // 如果支持的话，增加光照的衰减
            />

            {/* 使用Sphere来表示spotLight的位置 */}
            {/* <Sphere args={[0.2, 16, 16]} position={[spotlight1.x, spotlight1.y, spotlight1.z]}>
                <meshBasicMaterial attach="material" color="yellow" />
            </Sphere>
            <Sphere args={[0.2, 16, 16]} position={[spotlight2.x, spotlight2.y, spotlight2.z]}>
                <meshBasicMaterial attach="material" color="yellow" />
            </Sphere> */}

            {/* <pointLight intensity={0.5} position={[1, 1, 1]} /> //添加或调整点光源 */}
            {/* 使用Sphere来表示pointLight的位置 */}
            {/* <Sphere args={[0.2, 16, 16]} position={[1, 1, 1]}>
                <meshBasicMaterial attach="material" color="red" />
            </Sphere> */}

            <Suspense fallback={null}>
                {/* <GltfModel modelPath={modelPath} scale={scale} position={position} /> */}
                <GltfModel modelPath={modelPath} scale={scale} position={position} initialRotation={initialRotation} />
                <OrbitControls />
            </Suspense>
        </Canvas>
    );
};

const test = () => {
    return (
        <div className="relative h-[calc(100vh-4rem)]">
            <div className="h-full flex iems-center justify-center">
                {/* <div className="w-1/2 bg-black">TEST</div> */}
                {/* <div className="bg-yellow-500"> */}
                    <ModelViewer modelPath={"/BOX.gltf"} scale={initialScale} initialRotation={initialRotation} position={initialPosition} />
                {/* </div> */}
            </div>
        </div>
    );
};

export default test;
