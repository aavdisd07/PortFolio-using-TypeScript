import { IconAd } from "@tabler/icons-react";
import SideBar from "./SideBar";
const links = ["About", "Work", "Experience", "Skills", "Contact"];
const navLinks = (col:Boolean) => {
  return links.map((link, index) => {
    return (
      <a
        href={`#${link}`}
       className={` ${col?'flex flex-col items-center':'' } text-textColor hover:text-primaryColor text-lg`}
      >
        <span className="text-primaryColor">0{index}. </span>
        {link}
      </a>
    );
  });
};

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-bgColor px-14 dm-mono-regular h-[10vh]">
      <IconAd className="z-10" stroke={1.25} size={47} color="#64FFDA" />
      <div className="md:flex  gap-8 hidden ">{navLinks(false)}</div>
      <SideBar />
    </nav>
  );
};
export { navLinks };
export default Header;
