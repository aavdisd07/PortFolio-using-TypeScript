import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Info } from "../Users";
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
import { Button } from "@mantine/core";

const About = () => {

  const handleOpenPdf = () => {
    const pdfUrl = '/Avantika_Deshmukh_PDF-1-2.pdf'; // Update this path as needed
    window.open(pdfUrl, '_blank'); // Open the PDF in a new tab
  };
  



  const [dots, setDots] = useState<any>(null);
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
    return () => {
      if (dots) dots.destroy();
    };
  }, [dots]);

  return (
    <div className="flex  overflow-hidden font-mono px-16 h-[80vh] " id="bg">
      <div className="ml-20">
            <div className="text-3xl text-primaryColor">Hii, I am</div>
            <div className="text-white  text-[4rem] font-extrabold">Avantika Deshmukh</div>
          <div className=" text-white text-4xl flex font-semibold">I'm a &nbsp;<span className=" text-primaryColor"><Typewriter options={{strings: Info.stack,autoStart: true,loop: true,}}/></span></div>
        <div className="text-textColor text-xl font-semibold my-6">{Info.bio}</div>
        <Button  size="lg"  variant="filled" color="#64FFDA" onClick={handleOpenPdf} className="!text-bgColor" >Check Resume</Button>
      </div>
      <div></div>
    
    </div>

  );
};

export default About;
