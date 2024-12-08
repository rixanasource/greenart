import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import goofy from "../assets/3d/goofy.glb";
import CanvasLoader from "./Loader";

const Spaceman = ({ rotation, scale, position }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(goofy);
  const { actions } = useAnimations(animations, spacemanRef);

  useEffect(() => {
    console.log("Available animations:", animations[0]); // Log available animations
    console.log("Action:", actions); // Log action object

    // Assuming the animation name is "Animation"
    if (actions && actions["Animation"]) {
      actions["Animation"].play(); 
    }
  }, [actions, animations]);

  return (
    <mesh
      ref={spacemanRef}
      position={position}
      scale={scale}
      rotation={rotation}
    >
      <primitive object={scene} />
    </mesh>
  );
};

const SpacemanCanvas = ({ scrollContainer }) => {
  const [rotation, setRotation] = useState([0, 5, 0]); // Initial rotation
  const [scale, setScale] = useState([2, 2, 2]);
  const [position, setPosition] = useState([0.2, -0.7, 0]);
  const isDragging = useRef(false);
  const previousMouseX = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainer.current.scrollTop;
      const rotationXValue = scrollTop * -0.0006;
      const rotationYValue = scrollTop * -0.00075;
      setRotation((prev) => [rotationXValue, prev[1] + rotationYValue, prev[2]]);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1, 1, 1]);
        setPosition([0.2, -0.1, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([1.33, 1.33, 1.33]);
        setPosition([0.2, -0.3, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([1.5, 1.5, 1.5]);
        setPosition([0.2, -0.4, 0]);
      } else if (window.innerWidth < 1536) {
        setScale([1.66, 1.66, 1.66]);
        setPosition([0.2, -0.5, 0]);
      } else {
        setScale([1, 1, 1]);
        setPosition([0.2, -0.7, 0]);
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  const handlePointerDown = (event) => {
    isDragging.current = true;
    previousMouseX.current = event.clientX;
  };

  const handlePointerMove = (event) => {
    if (isDragging.current) {
      const deltaX = event.clientX - previousMouseX.current;
      setRotation((prev) => [prev[0], prev[1] + deltaX * 0.01, prev[2]]);
      previousMouseX.current = event.clientX;
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <Canvas
      className="w-full h-screen bg-transparent z-10"
      camera={{ near: 0.1, far: 1000 }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp} // To ensure dragging stops when mouse leaves canvas
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[0, 1, 0]} intensity={1} />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 5, 10]} intensity={1} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <Spaceman rotation={rotation} scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
