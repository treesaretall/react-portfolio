import ResumeItem from "./ResumeItem";
import ResumePNG from "../assets/ResumePNG.png";
import {
  DiCss3,
  DiHtml5,
  DiBootstrap,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiMysql,
  DiMongodb,
  DiMarkdown,
  DiHeroku,
} from "react-icons/di";

const Resume = () => {
  return (
    <>
      <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">
          Resume
        </h1>
        <p className="text-center py-8"></p>
        <div className="grid sm:grid-cols-2 gap-12">
          <ResumeItem img={ResumePNG} />
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center hover:scale-110 ease-in duration-200">
              <DiHtml5 size={80} />
            </div>
            <div className="flex items-center justify-center hover:scale-110 ease-in duration-200">
              <DiCss3 size={80} />
            </div>
            <div className="flex items-center justify-center hover:scale-110 ease-in duration-200">
              <DiBootstrap size={80} />
            </div>
            <div className="flex items-center justify-center hover:scale-110 ease-in duration-200">
              <DiJavascript1 size={80} />
            </div>
            <div className="flex items-center justify-center hover:scale-110 ease-in duration-200">
              <DiNodejs size={80} />
            </div>
            <div className="flex items-center justify-center hover:scale-110 ease-in duration-200">
              <DiReact size={80} />
            </div>
            <div className="flex items-center justify-center hover:scale-110 ease-in duration-200">
              <DiMysql size={80} />
            </div>
            <div className="flex items-center justify-center hover:scale-110 ease-in duration-200">
              <DiMongodb size={80} />
            </div>
            <div className="flex items-center justify-center hover:scale-110 ease-in duration-200">
              <DiMarkdown size={80} />
            </div>
            <div className="flex items-center justify-center hover:scale-110 ease-in duration-200">
              <DiHeroku size={80} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
