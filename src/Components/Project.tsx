import { ProjectInfo } from "../Users";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="px-16   my-8  font-mono md-mx:px-6" id="Projects">
      <h1 className="text-4xl  sm-mx:text-3xl xs-mx:text-2xl text-center mb-10 font-bold text-white">
        <span className="text-[#9F6BA0]">02. &nbsp;</span>Projects
      </h1>
      <div className="flex  flex-wrap justify-around md-mx:gap-2 md-mx:justify-between sm-mx:justify-center gap-4">
        {ProjectInfo.map((_project: any, index: number) => (
          <ProjectCard
            key={index}
            title={_project.title}
            desc={_project.desc}
            image={_project.image}
            live={_project.live}
            link={_project.link}
            github={_project.github}
            technologies={_project.technologies}
          />
        ))}
      </div>
    </div>
  );
};
export default Project;
