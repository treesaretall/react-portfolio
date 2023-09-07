import ResumeItem from "./ResumeItem";
import ResumePNG from "../assets/ResumePNG.png";

const Resume = () => {
  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Resume</h1>
      <p className="text-center py-8"></p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ResumeItem img={ResumePNG} />
      </div>
    </div>
  );
};

export default Resume;
