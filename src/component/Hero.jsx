import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";
import CanvasLoader from "../3D-Components/CanvasLoader";
import HackerRoom from "../3D-Components/HakerRoom";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import Target from "../3D-Components/Target";
import { calculateSizes } from "../constence/index";

import ReactLogo from "../3D-Components/ReactLogo";
import Cube from "../3D-Components/Cube";
import Rings from "../3D-Components/Ring";
import HeroCamera from "../3D-Components/HeroCamera";
import Button from "../3D-Components/Button";

function Hero() {
  // const x = useControls(
  //   ("HackerRoom",
  //   {
  //     positionX: {
  //       value: 2.5,
  //       min: -15,
  //       max: 10,
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -15,
  //       max: 10,
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -15,
  //       max: 10,
  //     },
  //     rotationX: {
  //       value: 2.5,
  //       min: -15,
  //       max: 10,
  //     },
  //     rotationY: {
  //       value: 2.5,
  //       min: -15,
  //       max: 10,
  //     },
  //     rotationZ: {
  //       value: 2.5,
  //       min: -15,
  //       max: 10,
  //     },
  //     scale: {
  //       value: 2.5,
  //       min: -15,
  //       max: 10,
  //     },
  //   })
  // );

  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 ">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans ">
          Hi, I'm Iresh <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
        <div className="w-full h-full absolute inset-0">
          {/* <Leva /> */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  //scale={0.07}
                  //position={[0, -5, 0]}
                  //rotation={[0, 90, 0]}
                  position={[-1, -9, -2]}
                  rotation={[-2.9, Math.PI, 0]}
                  scale={-0.1}
                />
              </HeroCamera>

              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Rings position={sizes.ringPosition} />
                <Cube position={sizes.cubePosition} />
              </group>

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={10} />
            </Suspense>
          </Canvas>
        </div>
        <div className=" absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="#about" className="w-fit">
            <Button
              name="Let's work together"
              isBeam
              continerClass="sm:w-fit w-full sm:min-w-96 lg:w-3"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
