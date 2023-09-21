export const ProjectItem = ({ img, title, tech, site }) => {
  const projectItemNav = () => {
    window.open(`${site}`, "_blank");
  };
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:scale-110 duration-200">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-20" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-black tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-black text-center">{tech}</p>
        <a onClick={projectItemNav}>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
