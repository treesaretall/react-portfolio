import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import pool from "../assets/pool1.jpeg";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      id="main">
      <img
        className="bg-top w-full h-screen object-cover"
        src={pool}
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
              sequence={["Developer", 1000, "Coder", 1000, "Veteran", 1000]}
              wrapper="div"
              speed={30}
              style={{ fontSize: "1em", paddingLeft: "8px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[100px] w-full">
            <FaLinkedinIn
              onclick="window.location='https://www.linkedin.com/in/matthewwhurst/'"
              className="cursor-pointer hover:scale-110 ease-in duration-200"
              size={20}
            />
            <FaGithub
              onclick="window.location='https://github.com/treesaretall'"
              className="cursor-pointer hover:scale-110 ease-in duration-200"
              size={20}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
