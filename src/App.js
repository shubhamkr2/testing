// import "./App.css";
import AboutMe from "./components/about/AboutMe";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
// import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import AllRoutes from "./Routing/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <AboutMe/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
