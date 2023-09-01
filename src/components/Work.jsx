import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Graduate UCF Coding Bootcamp",
    duration: "6 Months",
    details:
      "Learned fundamental concepts of web development, including HTML, CSS, and JavaScript. Worked with servers, databases, and other back end technologies, such as MySQL database, Node.js, and more. Grew my skills using NoSQL databases, convert traditional applications into progressive web applications, and learned React.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]"></h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}></WorkItem>
      ))}
    </div>
  );
};

export default Work;
