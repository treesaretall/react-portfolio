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
      {/* <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">
          Resume
        </h1>
        <div className="gap-12 max-w-xl ">
          <ResumeItem img={ResumePNG} />
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-12 justify-center sm:justify-items-center items-center sm:justify-center pt-6 max-w-[100px] w-full">
              <DiHtml5 size={80} />
              <DiCss3 size={80} />
              <DiBootstrap size={80} />
              <DiJavascript1 size={80} />
              <DiNodejs size={80} />
              <DiReact size={80} />
              <DiMysql size={80} />
              <DiMongodb size={80} />
              <DiMarkdown size={80} />
              <DiHeroku size={80} />
            </div>
          </div>
        </div>
      </div> */}
      <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">
          Resume
        </h1>
        <p className="text-center py-8"></p>
        <div className="grid sm:grid-cols-2 gap-12">
          <ResumeItem img={ResumePNG} />
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center">
              <DiHtml5 size={80} />
            </div>
            <div className="flex items-center justify-center">
              <DiCss3 size={80} />
            </div>
            <div className="flex items-center justify-center">
              <DiBootstrap size={80} />
            </div>
            <div className="flex items-center justify-center">
              <DiJavascript1 size={80} />
            </div>
            <div className="flex items-center justify-center">
              <DiNodejs size={80} />
            </div>
            <div className="flex items-center justify-center">
              <DiReact size={80} />
            </div>
            <div className="flex items-center justify-center">
              <DiMysql size={80} />
            </div>
            <div className="flex items-center justify-center">
              <DiMongodb size={80} />
            </div>
            <div className="flex items-center justify-center">
              <DiMarkdown size={80} />
            </div>
            <div className="flex items-center justify-center">
              <DiHeroku size={80} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
