import { Avatar } from "@mantine/core";
import React from "react";

const SkillsBadge = (skills: []) => {
  return skills.map((skill: any, index: number) => (
    <div
      key={index}
      className="flex gap-2 border rounded-2xl items-center border-textColor  py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1"
    >
      <img
        className="!w-[48px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1   "
        src={`/Icons/${skills}.png`}
      />
      {/* public icons png  */}
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
      <div className="text-3xl mb-4  sm-mx:text-2xl xs-mx:text-xl text-primaryColor text-center font-bold">
        {props.title}
      </div>
      <div className="flex flex-wrap gap-3  bs-mx:gap-2 justify-center">
        {SkillsBadge(props.skills)}
      </div>
    </div>
  );
};

export default SkillCard;
