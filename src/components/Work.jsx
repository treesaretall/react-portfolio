import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Graduate UCF Coding Bootcamp",
    duration: "6 Months",
    details:
      "Learned fundamental concepts of web development, including HTML, CSS, and JavaScript. Worked with servers, databases, and other back end technologies, such as MySQL database, Node.js, and more. Grew my skills using NoSQL databases, convert traditional applications into progressive web applications, and learned React.",
  },
  {
    year: 2019,
    title: "Master Training Specialist",
    duration: "4 Years",
    details:
      "Applies effective instructional techniques; develops, implements, and evaluates curricula, instructions, and course supporting materials; conducts in-service training; conducts instructor evaluations; and conducts formal course reviews of high risk training and high risk instructors in support of Joint Special Operations.",
  },
  {
    year: 2017,
    title: "Fleet Marine Force Corpsman",
    duration: "6 Years",
    details:
      "Provides medical and operational services for Fleet Marine Force Reconnaissance personnel engaged in direct action and reconnaissance operations. Performs paramedical skills, basic life support, minor surgical procedures and other routine and emergency medical health care procedures as required.",
  },
  {
    year: 2013,
    title: "Naval Special Operations Corpsman",
    duration: "10 Years",
    details:
      "Deliver remote emergency medicine with critical care transport capability for injuries associated with trauma, open and closed circuit diving, military freefall and amphibious operations while leading teams and working across all aspects of Navy Special Warfare, Navy Special Operations, and Navy Medicine.",
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
