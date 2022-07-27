import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GradientTexture } from "@react-three/drei";

// import texture from "../images/map.jpg";

export default function Box() {
  //   const colorMap = useLoader(TextureLoader, texture);

  return (
    <mesh rotation={[90, 0, 20]}>
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
            size={1024}
          />
        </meshBasicMaterial>
        {/* color="#8352FD" */}
      </Sphere>
    </mesh>
  );
}
