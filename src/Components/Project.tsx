import { ProjectInfo } from "../Users";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
 <div className="px-16   my-10 mx-20  font-mono my-5" id="Projects">
    <h1 className="text-4xl  text-center mb-5 font-bold text-white text-white  "><span className="text-primaryColor">02. &nbsp;</span>Projects</h1>
  <div className="flex  flex-wrap justify-between gap-4">
    {
       ProjectInfo.map((_project:any,index:number )=><ProjectCard key={index} title={_project.title}  
       desc={_project.desc} image={_project.image} live={_project.live}
       link={_project.link} github={_project.github} technologies={_project.technologies}
       
       
       />)
    }
   
  </div>
 
 
 </div>   

) 
};
export default Project;
