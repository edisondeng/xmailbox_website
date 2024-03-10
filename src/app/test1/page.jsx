"use client"

import React, { useRef, useState, useEffect, Suspense } from "react";


// import { useLoader, useFrame } from "@react-three/fiber";
// import { Canvas } from "@react-three/fiber";

// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// import { Sphere } from '@react-three/drei';
// import { OrbitControls } from "@react-three/drei";


import ModelViewer from "@/components/box_3d";


const test = () => {
    return (
        <div className="relative h-[calc(100vh-4rem)]">
            <div className="h-full flex iems-center justify-center">
                <ModelViewer  />
            </div>
        </div>
    );
};

export default test;
