import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Info } from "../Users";
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
import Halo from "vanta/src/vanta.halo";
import { Button } from "@mantine/core";

const About = () => {
  // const handleOpenPdf = () => {
  //   const pdfUrl =
  //     "https://aavdisd07.github.io/PortFolio-Using-TypeScript/Avantika_Deshmukh_PDF-1-2.pdf"; // Update this path as needed
  //   window.open(pdfUrl, "_blank");
  // };

  const [dots, setDots] = useState<any>(null);
  const [halo, setHalo] = useState<any>(null);

  useEffect(() => {
    if (!dots) {
      setDots(
        DOTS({
          el: "#bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color2: 0x102586,
          size: 3,
          showLines: false,
          backgroundColor: 0x112240,
          spacing: 20,
        })
      );
    }
    if (!halo) {
      setHalo(
        Halo({
          el: "#photo",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x18b8c0,
          backgroundColor: 0x1f1c1c,
          // baseColor: 0xde8614,
          // backgroundColor: 0x1f1c1c,

          // baseColor: 0xa63d08,
          // backgroundColor: 0x07edda,

          amplitudeFactor: 6.4,
          xOffset: 0.1,
          yOffset: 0.02,
          size: 1.7,
        })
      );
    }

    return () => {
      if (dots) dots.destroy();
      if (halo) halo.destroy();
    };
  }, []);

  return (
    <div
      className="flex  overflow-hidden font-mono px-16 items-center justify-around  h-[80vh] "
      id="bg"
    >
      <div className="ml-20  w-3/5 flex flex-col  ">
        <div className="text-3xl text-primaryColor">Hii, I am</div>
        <div className="text-white  text-[4rem] font-extrabold">
          Avantika Deshmukh
        </div>
        <div className=" text-white text-4xl flex font-semibold">
          I'm a &nbsp;
          <span className=" text-primaryColor">
            <Typewriter
              options={{ strings: Info.stack, autoStart: true, loop: true }}
            />
          </span>
        </div>
        <div className="text-textColor text-xl font-semibold my-5 text-justify w-[90%]">
          {Info.bio}
        </div>
        <Button
          size="lg"
          variant="filled"
          color="#64FFDA"
          component="a" href="https://github.com/aavdisd07/PortFolio-Using-TypeScript/blob/main/public/Avantika_Deshmukh_Resume%20(2).pdf" target="_blank"
          className="!text-bgColor  !w-fit "
        >
          Check Resume
        </Button>
      </div>
      <div
        id="photo"
        className=" flex justify-center items-center h-[50vh] w-[25vw]  rounded-full overflow-hidden mr-14"
      >
        <img
          className="w-[83%] rounded-full shadow-xl"
          src="https://i.pinimg.com/564x/df/a7/97/dfa797f0ff64c94bd10de366a3b1da07.jpg"
          alt="mypic"
        />
      </div>
    </div>
  );
};

export default About;
