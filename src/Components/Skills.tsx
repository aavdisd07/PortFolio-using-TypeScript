import SkillCard from "./SkillCard"
import {SkillInfo} from "../Users"
function Skills() {
  return <div className="px-16   my-10 mx-20  font-mono my-5" id="Skills">
    <h1 className="text-4xl  mb-5 font-bold text-center text-white text-white  "><span className="text-primaryColor">03.&nbsp;</span>Skills</h1>
  <div className="flex flex-wrap gap-5 justify-between">
  {
    SkillInfo.map((skill:any,index:number)=><SkillCard  key={index} title={skill.title} skills={skill.skills}/>)
  }
  </div>
  
  </div>
}

export default Skills

