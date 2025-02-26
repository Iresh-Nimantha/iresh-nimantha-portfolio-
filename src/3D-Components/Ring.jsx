import { useGSAP } from "@gsap/react";
import { Center, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useRef } from "react";

const Rings = ({ position = [-30, 25, 2] }) => {
  // Ensure a default position array
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture("src/public/textures/rings.png");

  useGSAP(() => {
    if (refList.current.length === 0) return;

    // Ensure position has exactly 3 values
    if (position.length < 3) {
      console.error("Position array must have exactly 3 values: [x, y, z]");
      return;
    }

    refList.current.forEach((r) => {
      r.position.set(position[0], position[1], position[2]); // Correct indices
    });

    gsap.timeline({ repeat: -1, repeatDelay: 0.5 }).to(
      refList.current.map((r) => r.rotation),
      {
        y: `+=${Math.PI * 2}`,
        x: `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: { each: 0.15 },
      }
    );
  }, [position]); // Correct dependency

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1, 16, 100]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
