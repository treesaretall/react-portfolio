import ResumePDF from "../assets/ResumePDF.pdf";

const handleClick = () => {
  // Replace 'your-pdf-file.pdf' with the actual URL or path to your PDF file
  const pdfUrl = ResumePDF;
  // Open the PDF in a new tab or window
  window.open(pdfUrl, "_blank");
};

const ResumeItem = ({ img }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt="/"
        onClick={handleClick}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          Resume
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React JS</p>
      </div>
    </div>
  );
};

export default ResumeItem;
