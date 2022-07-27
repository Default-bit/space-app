import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./components/Box";
import "./Paint.css";

const Planet = () => {
    return (
        <div className="canvas">
        <Canvas>
          <OrbitControls enableZoom={true} />
          <ambientLight intensity={100} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>
        </Canvas>
      </div> 
    );
};

export default Planet;