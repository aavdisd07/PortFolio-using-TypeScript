import reactIcon from "../assets/Icons/ReactJs.png";
import tsIcon from "../assets/Icons/TypeScript.png";
import htmlIcon from "../assets/Icons/HTML.png";
import cssIcon from "../assets/Icons/CSS.png";
import jsIcon from "../assets/Icons/JavaScript.png";
import pyIcon from "../assets/Icons/Python.png";
import lxIcon from "../assets/Icons/Linux.png";
import jvIcon from "../assets/Icons/Java.png";
import TcIcon from "../assets/Icons/TailwindCSS.png";
import wpIcon from "../assets/Icons/WordPress.png";
import nxIcon from "../assets/Icons/NextJs.png";
import djIcon from "../assets/Icons/Django.png";
import btIcon from "../assets/Icons/Bootstrap.png";
import ftIcon from "../assets/Icons/Flutter.png";
import fbIcon from "../assets/Icons/Firebase.png";
import cppIcon from "../assets/Icons/CPP.png";
import mysqlIcon from "../assets/Icons/MySql.png";
import cIcon from "../assets/Icons/C.png";
import sqlIcon from "../assets/Icons/Sql.png";
import SprIcon from "../assets/Icons/SpringBoot.png";

const Icons: { [key: string]: string } = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  ReactJs: reactIcon,
  TypeScript: tsIcon,
  Bootstrap: btIcon,
  WordPress: wpIcon,
  TailwindCSS: TcIcon,
  Java: jvIcon,
  Python: pyIcon,
  Linux: lxIcon,
  NextJs: nxIcon,
  Django: djIcon,
  Flutter: ftIcon,
  Firebase: fbIcon,
  CPP: cppIcon,
  MySQL: mysqlIcon,
  C: cIcon,
  SQL:sqlIcon,
  SpringBoot:SprIcon,


};
const SkillsBadge = (skills: string[]) => {
  return skills.map((skill: string, index: number) => (
    <div
      key={index}
      className="flex gap-2 border rounded-2xl items-center border-textColor py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1"
    >
     
        <img
          className="!w-[48px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1"
          src={Icons[skill] ? Icons[skill] : '/path/to/default/icon.png'} 
          alt={`${skill} icon`}
        />
      
      <div className="text-textColor text-xl font-medium">{skill}</div>
    </div>
  ));
};


const SkillCard = (props: any) => {
  return (
    <div
      data-aos="flip-right"
      data-aos-duration="900"
      className="w-[49%] shadow-[0_0_10px_0_#64FADA80] rounded-2xl border border-primaryColor p-5 bs-mx:p-3 sm-mx:w-full"
    >
      <div className="text-3xl mb-4 sm-mx:text-2xl xs-mx:text-xl text-primaryColor text-center font-bold">
        {props.title}
      </div>
      <div className="flex flex-wrap gap-3 bs-mx:gap-2 justify-center">
        {SkillsBadge(props.skills)}
      </div>
    </div>
  );
};

export default SkillCard;
