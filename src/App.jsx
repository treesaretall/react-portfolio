import Sidenav from "./components/Sidenav.jsx";
import Main from "./components/Main.jsx";
import Work from "./components/Work.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
