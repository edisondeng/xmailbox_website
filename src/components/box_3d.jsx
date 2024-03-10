"use client"

import React, { useRef, useState, useEffect, Suspense } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { Sphere } from '@react-three/drei';
import { OrbitControls } from "@react-three/drei";

const defaultmodelPath = "/BOX.gltf";
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

const GltfModel = ({ modelPath, scale = 25, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, hover] = useState(false);

    console.log("modelPath=", modelPath);

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += 0.001;
        }
    });

    // Effect to set initial rotation
    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = rotation[0];
            ref.current.rotation.y = rotation[1];
            ref.current.rotation.z = rotation[2];
        }
    }, [rotation]);

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

const ModelViewer = ({ modelPath=defaultmodelPath, scale = initialScale, position = initialPosition, rotation=initialRotation }) => {
    console.log("ModelViewer=", ModelViewer);
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

            <Suspense fallback={null}>
                {/* <GltfModel modelPath={modelPath} scale={scale} position={position} /> */}
                <GltfModel modelPath={modelPath} scale={scale} position={position} rotation={rotation} />
                <OrbitControls />
            </Suspense>
        </Canvas>
    );
};

export default ModelViewer;
