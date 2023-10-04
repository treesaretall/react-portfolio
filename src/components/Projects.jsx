import ProjectItem from "./ProjectItem";
import NotAboutCows from "../assets/notaboutcows.png";
import stasios from "../assets/stasios.png";
import qualified from "../assets/qualified.jpeg";
import titan from "../assets/titan.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8"></p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={stasios}
          title="Stasios Deli Site"
          tech="React - Node - MongoDB - bcrypt - Apollo Server - Express - Tailwind - GraphQL"
          site="https://stasios-7fcd485311cd.herokuapp.com/"
        />
        <ProjectItem
          img={NotAboutCows}
          title="Photography App"
          tech="React.js - Tailwind - Framer Motion"
          site="https://notaboutcows.netlify.app"
        />

        <ProjectItem img={qualified} title="Qualified App" />
        <ProjectItem img={titan} title="Titan App" />
      </div>
    </div>
  );
};

export default Projects;
