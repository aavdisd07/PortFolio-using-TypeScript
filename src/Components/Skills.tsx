import SkillCard from "./SkillCard";
import { SkillInfo } from "../Users";
function Skills() {
  return (
    <div className="px-16   my-10 md-mx:px-6 font-mono" id="Skills">
      <h1 className="text-4xl  mb-10 sm-mx:text-3xl xs-mx:text-2xl font-bold text-center text-white text-white">
        <span className="text-[#DAFA66]">03.&nbsp;</span>Skills
      </h1>
      <div className="flex flex-wrap gap-4 justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
        {SkillInfo.map((skill: any, index: number) => (
          <SkillCard key={index} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
