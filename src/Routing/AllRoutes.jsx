import { Routes, Route } from "react-router-dom";
import AboutMe from "../components/about/AboutMe";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import Project from "../components/project/Project";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AllRoutes;
