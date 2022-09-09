import React from "react";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

export default function SplineCakeService({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/o4FzlqVKY7TmPmDe/scene.splinecode"
  );
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <group {...props} dispose={null}>
        <group name="Group 3" position={[97.86, 574.59, -357.68]}>
          <group name="Group 2">
            <PerspectiveCamera
              name="Camera"
              makeDefault={false}
              far={100000}
              near={5}
              fov={45}
              up={[0, 1, 0]}
              position={[-234.16, 674, -252.18]}
              rotation={[-1.95, -0.28, -2.54]}
            />
            <group
              name="Z 2"
              position={[-37.69, -514.07, 312.39]}
              scale={[-0.16, 0.16, 0.3]}
            >
              <mesh
                name="Shape 0"
                geometry={nodes["Shape 0"].geometry}
                material={materials["Shape 0 Material"]}
                castShadow
                receiveShadow
                position={[-565.5, 44.64, 54.57]}
              />
            </group>
            <group
              name="Z"
              position={[-159.93, -511.29, 337.17]}
              scale={[0.17, 0.17, 0.3]}
            >
              <mesh
                name="Shape 01"
                geometry={nodes["Shape 01"].geometry}
                material={materials["Untitled Material"]}
                castShadow
                receiveShadow
                position={[-565.5, 44.64, 53.23]}
              />
            </group>
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials["Ellipse Material"]}
              castShadow
              receiveShadow
              position={[-99.86, -574.59, 337.68]}
            />
          </group>
        </group>
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={0.8}
          far={9000}
          near={-100000}
          position={[0, 0, -7142.86]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={2.31}
          color="#969696"
          position={[0, 1, 0]}
        />
      </group>
    </>
  );
}
