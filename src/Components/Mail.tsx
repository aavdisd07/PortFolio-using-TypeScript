import { classNames } from "@react-pdf-viewer/core";

const Mail = () => {
  return (
    <div className="md-mx:hidden fixed bottom-1/2 -right-40  transform -translate-y-1/2 rotate-90 tracking-widest flex items-center text-textColor gap-2">
      <div data-aos="fade-down-right" data-aos-duration="900" className="flex">
        <a
          href="mailto:2021bit153@sggs.ac.in"
          className="font-mono text-lg hover:text-[#9F6BA0]  hover:-translate-x-2 transition transform duration-300 ease-in-out"
        >
          2021BIT153@sggs.ac.in
        </a>
      </div>
      <hr className="border-2 w-40 rounded-full  border-[#9F6BA0]" />
    </div>
  );
};

export default Mail;
