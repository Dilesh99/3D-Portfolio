import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isSmallTablet, isLargeTablet }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight
        intensity={2.5}
        position={isMobile ? [0, -0.5, -0.1] : isSmallTablet ? [0, -0.8, -0.2] : [0, -0.8, -0.2]}
      />
      <primitive
        object={computer.scene}
        scale={
          isMobile
            ? 0.25
            : isSmallTablet
            ? 0.4
            : isLargeTablet
            ? 0.55
            : 0.65 // Default for larger screens
        }
        position={
          isMobile
            ? [0, -1.8, -0.4]
            : isSmallTablet
            ? [0, -2.2, -0.8]
            : isLargeTablet
            ? [0, -2.6, -1.2]
            : [0, -3, -1.5] // Default for larger screens
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallTablet, setIsSmallTablet] = useState(false);
  const [isLargeTablet, setIsLargeTablet] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQueryMobile = window.matchMedia("(max-width: 480px)");
    const mediaQuerySmallTablet = window.matchMedia("(max-width: 768px)");
    const mediaQueryLargeTablet = window.matchMedia("(max-width: 1024px)");

    // Set the initial value of the state variables
    setIsMobile(mediaQueryMobile.matches);
    setIsSmallTablet(mediaQuerySmallTablet.matches && !mediaQueryMobile.matches);
    setIsLargeTablet(mediaQueryLargeTablet.matches && !mediaQuerySmallTablet.matches);

    // Define callback functions to handle changes to the media queries
    const handleMediaQueryMobileChange = (event) => setIsMobile(event.matches);
    const handleMediaQuerySmallTabletChange = (event) =>
      setIsSmallTablet(event.matches && !mediaQueryMobile.matches);
    const handleMediaQueryLargeTabletChange = (event) =>
      setIsLargeTablet(event.matches && !mediaQuerySmallTablet.matches);

    // Add event listeners for the media queries
    mediaQueryMobile.addEventListener("change", handleMediaQueryMobileChange);
    mediaQuerySmallTablet.addEventListener("change", handleMediaQuerySmallTabletChange);
    mediaQueryLargeTablet.addEventListener("change", handleMediaQueryLargeTabletChange);

    // Remove event listeners when the component is unmounted
    return () => {
      mediaQueryMobile.removeEventListener("change", handleMediaQueryMobileChange);
      mediaQuerySmallTablet.removeEventListener("change", handleMediaQuerySmallTabletChange);
      mediaQueryLargeTablet.removeEventListener("change", handleMediaQueryLargeTabletChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers
          isMobile={isMobile}
          isSmallTablet={isSmallTablet}
          isLargeTablet={isLargeTablet}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
