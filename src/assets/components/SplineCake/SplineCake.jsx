import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.119.1/build/three.module.js";
import { OrbitControls } from "@react-three/drei";
import SplineCakeService from "./SplineCakeService";
import "./SplineCake.css";

export default function SplineCake() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows flat linear>
        <SplineCakeService />
        <OrbitControls
          touches={{ TWO: THREE.TOUCH.DOLLY_ROTATE }}
          enablePan={false}
          autoRotate={true}
          loop={true}
        />
      </Canvas>
    </Suspense>
  );
}
