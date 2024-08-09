import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Info } from "../Users";
import myImage from '../assets/myimg.png';
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
import Halo from "vanta/src/vanta.halo";
import { BackgroundImage, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";

const About = () => {

 const [opened,{open,close}]=useDisclosure(false);

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
          // baseColor: 0x18b8c0,
          // backgroundColor: 0x1f1c1c,
          baseColor: 0xde8614,
          backgroundColor: 0x1f1c1c,
          // BackgroundColor:#112240,

          // baseColor: 0xa63d08,
          // backgroundColor: 0x07edda,

          amplitudeFactor: 9.8,
          xOffset: 0.5,
          yOffset: 0.10,
          size: 1.9,
        })
      );
    }

    return () => {
      if (dots) dots.destroy();
      if (halo) halo.destroy();
    };
  }, []);

  return (
    <>
    <div
      className="flex  overflow-hidden font-mono px-16  items-center justify-around md:!h-[80vh] "
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
        <div className="flex gap-3">
        <Button 
        onClick={open}
          size="lg"
          variant="filled"
          color="#64FFDA"
          className="!text-bgColor  !w-fit "
        >
          Check Resume
        </Button>
        <Button 
         component="a" href="/Avantika_Resume.pdf" download="AvantikaDeshmukhResume"
          size="lg"
          variant="outline" 
          color="#64FFDA"
          className="!text-primaryColor  !w-fit "
          rightSection={<IconDownload size={20}/>}
 >
          Download
        </Button>
        </div>
       
      </div>
      <div
      id="photo"
      className="flex justify-center items-center h-[50vh] w-[25vw] rounded-full overflow-hidden ml-14"
    >
      <img
        className="object-cover rounded-full  w-[90%] h-[90%] object-top object-fit-cover"
        src={myImage}
        alt="mypic"
      />
    </div>
    </div>
    <ResumeViewer opened={opened} close={close}/>
    </>
  );
};

export default About;
