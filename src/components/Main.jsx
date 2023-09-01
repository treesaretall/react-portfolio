import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="src/assets/diveside.JPG"
        alt="Diveside Instructor"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Matthew Hurst
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I am a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                1000,
                "Veteran",
                1000,
              ]}
              wrapper="div"
              speed={30}
              style={{ fontSize: "1em", paddingLeft: "8px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[299px] w-full">
            <FaLinkedinIn
              href="https://www.linkedin.com/in/matthewwhurst/"
              className="cursor-pointer"
              size={20}
            />
            <FaGithub
              href="https://github.com/treesaretall"
              className="cursor-pointer"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
