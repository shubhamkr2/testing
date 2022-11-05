import css from "./Project.module.css";
import ProjectCard from "./ProjectCard";

const projectList = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/project.png",
    title: "Anthropologie-Project",
    description:
      "This is my first group project a clone of the Anthropologie website. it is a Fashion and Life-style ecommerce website. we made this clone with HTML, JavaScript, CSS",
    techStack: "HTML, CSS, JavaScript",
    dep_link: "https://anthropologie-project-cv7a.vercel.app",
    git_link: "https://github.com/Abrar2003/Anthropologie-Project",
  },
  {
    id: 2,
    image: "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/project.png",
    title: "Anthropologie-Project",
    description:
      "This is my first group project a clone of the Anthropologie website. it is a Fashion and Life-style ecommerce website. we made this clone with HTML, JavaScript, CSS",
    techStack: "HTML, CSS, JavaScript",
    dep_link: "anthropologie-project-cv7a.vercel.app",
    git_link: "https://github.com/Abrar2003/Anthropologie-Project",
  },
  {
    id: 3,
    image: "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/project.png",
    title: "Anthropologie-Project",
    description:
      "This is my first group project a clone of the Anthropologie website. it is a Fashion and Life-style ecommerce website. we made this clone with HTML, JavaScript, CSS",
    techStack: "HTML, CSS, JavaScript",
    dep_link: "anthropologie-project-cv7a.vercel.app",
    git_link: "https://github.com/Abrar2003/Anthropologie-Project",
  },
  {
    id: 4,
    image: "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/project.png",
    title: "Anthropologie-Project",
    description:
      "This is my first group project a clone of the Anthropologie website. it is a Fashion and Life-style ecommerce website. we made this clone with HTML, JavaScript, CSS",
    techStack: "HTML, CSS, JavaScript",
    dep_link: "https://anthropologie-project-cv7a.vercel.app/",
    git_link: "https://github.com/Abrar2003/Anthropologie-Project",
  },
];

const Project = () => {
  return (
    <div className={css.projectContainer}>
      <h1>Project</h1>
      <div className={css.projects}>
        {projectList.map((list) => {
          return (
            <ProjectCard
              image={list.image}
              title={list.title}
              description={list.description}
              techStack={list.techStack}
              deployed={list.dep_link}
              github={list.git_link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
