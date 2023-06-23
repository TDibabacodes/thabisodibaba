import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import Chat from "../public/img/Chat.png";
import Piano from "../public/img/Piano.png";
import Portfolio from "../public/img/Portfolio.png";
import Survey from "../public/img/Survey.png";

import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={Chat.src}
          title="ChatBot App"
          link="https://tdibabacodes.github.io/ChatBot-App.github.io/"
        />
        <ProjectCard
          img={Piano.src}
          title="Piano App"
          link="https://tdibabacodes.github.io/Piano-App.github.io/"
        />
        <ProjectCard
          img={Survey.src}
          title="Survey App - (Front-End)"
          link="https://tdibabacodes.github.io/surveyapplication.github.io/"
        />
        <ProjectCard
          img={Portfolio.src}
          title="Portfolio"
          link="https://lnkd.in/d4755GjC"
        />
      </div>
    </div>
  );
};

export default Projects;
