import Globe from "react-globe.gl";
import Button from "../3D-Components/Button";
import { useState } from "react";

function About() {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("nimanthairesh9@gmail.com");

    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(true);
    }, 2000);
  };

  return (
    <section className="my-20 px-4" id="about">
      <p className="relative text-headtext">About Me</p>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3 flex flex-col items-center justify-center">
          <div className="w-full">
            <img
              src="src/public/assets/grid1.png"
              alt="mypic"
              className="w-full sm:h-[276px] h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <p className="text-xl font-semibold  text-neutral-500">
                Hi, I'm Iresh Nimantha
              </p>
              <p className="grid-subtext">
                Hi, I’m Svetoslav! I’m a passionate web developer, specializing
                in building interactive and responsive websites with modern
                technologies like WordPress, React.js, and Python. With over 10
                years of experience, I’ve honed my skills in both web
                development and digital marketing, and I thrive on creating
                impactful solutions that help businesses succeed online.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="src/public/assets/grid2.png"
              alt="myskils"
              className="w-full sm:h-[276px] h-fit object-contain "
            />

            <div>
              <p className="grid-headtext">Teck Stack</p>
              <p className="grid-subtext">
                I specialized in js/ts with focus on react and Next.js ecosystem
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-hit flex justify-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 7.8731, // Latitude for Sri Lanka
                    lng: 80.7718, // Longitude for Sri Lanka
                    text: "I'm here!", // Text to display
                    color: "black", // Make sure it's visible
                    size: 500,
                  },
                ]}
              />
            </div>

            <div>
              <p className="grid-headtext">
                I work remortly accross time zone.
              </p>
              <p className="grid-subtext">
                Based in sri lanka, with remote work avilable.
              </p>
              <a href="#contact">
                <Button name="Contact me" isBeam continerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="src/public/assets/grid3.png"
              alt=""
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for coding</p>
              <p className="grid-subtext">
                My Passion for coding, I specialized in js/ts with focus on
                react and Next.js ecosystem
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="src/public/assets/grid4.png"
              alt="grid4"
              className="w-full md:h-[126px] sm:h-[266px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={
                    hasCopied
                      ? `src/public/assets/tick.svg`
                      : `src/public/assets/copy.svg`
                  }
                  alt="copy"
                />
                <p className="lg:text-1xl md:text-xl font-medium text-gray_gradient text-white">
                  nimanthairesh9@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
