import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

function HeroCamera({ children, isMobile }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Smooth camera movement
    easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta);

    if (!isMobile) {
      // Smooth rotation effect when not on mobile
      easing.dampE(
        groupRef.current.rotation,
        [
          -state.pointer.y / 3, // Rotation based on pointer y
          -state.pointer.x / 5, // Rotation based on pointer x
          0,
        ],
        0.25, // Smooth time
        delta
      );
    }
  });

  return (
    <>
      <group ref={groupRef} scale={1}>
        {children}
      </group>
    </>
  );
}

export default HeroCamera;
