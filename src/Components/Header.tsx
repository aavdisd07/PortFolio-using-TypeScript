import { IconAd } from "@tabler/icons-react";
import SideBar from "./SideBar";
import Particles from "./magicui/Particle";
const links = ["About", "Projects","Experience", "Skills", "Contact"];
const navLinks = (col: Boolean, clicked: any) => {
  const handleClick = () => {
    if (clicked) clicked();
  };
  return links.map((link, index) => {
    return (
      <a
        key={index}
        onClick={handleClick}
        className={`${
          col ? "flex flex-col items-center" : ""
        } text-textColor text-lg font-mono hover:text-primaryColor`}
        href={`#${link}`}
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
      <IconAd className="z-10" stroke={1.25} size={47} color="#87CEEB" />
      <div className="md:flex  gap-8 hidden ">{navLinks(false, null)}</div>
      <SideBar />
    </nav>
  );
};
export { navLinks };
export default Header;
