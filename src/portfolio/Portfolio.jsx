import Container from "../components/container/Container";
import "./Portfolio.css";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      title: "Chatify",
      imageSrc:
        "https://static-00.iconduck.com/assets.00/messenger-icon-512x511-wsdhvs0c.png",
      description:
        "Developed a real-time chat application using Socket.IO for instant communication, featuring user authentication and message broadcasting between clients.",
      skills: ["React", "socket.io", "Node", "Tailwind"],
      demo: "",
      source: "https://github.com/Deva9754/Chatify/tree/master",
    },
    {
      title: "HealthBuddy",
      imageSrc: "https://i.ytimg.com/vi/TkHxyR75vZE/maxresdefault.jpg",
      description:
        "Build a Flipkart clone, replicating the e-commerce platform's functionalities, including product listings, user authentication, and shopping cart management. ",
      skills: ["React", "MUI", "Sass", "redux-toolkit"],
      demo: "https://health-buddy-git-main-devashish-sahus-projects.vercel.app",
      source: "https://github.com/Deva9754/HealthBuddy",
    },
    {
      title: "Flipkart-clone",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KbSaAU0XA2XTjF9pkm7-5R9j8KbWbuOgdg&s",
      description:
        "Build a Flipkart clone, replicating the e-commerce platform's functionalities, including product listings, user authentication, and shopping cart management. ",
      skills: ["React", "MUI", "Sass", "redux-toolkit"],
      demo: "https://flipkartclone-devashish-sahus-projects.vercel.app/",
      source: "https://github.com/Deva9754/Flipkart",
    },

    {
      title: "Movie_Stream App",
      imageSrc:
        "https://a0.anyrgb.com/pngimg/906/338/windows-movie-maker-freemake-video-downloader-visual-effects-film-editing-video-editing-filmmaking-music-video-editing-coin-icon-design-thumbnail.png",
      description:
        "Designed a movie streaming application integrating GPT-powered chatbots for personalized recommendations, enhancing user engagement and satisfaction.",
      skills: ["React", "Redux-toolkit", "MUI", "Tailwind"],
      demo: "https://netflixgpt-omega.vercel.app/",
      source: "https://github.com/Deva9754/Netflixgpt",
    },
  ];
  return (
    <Container>
      <div className="container" id="projects">
        <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
        </h2>
        <div className="projects">
          {projects.map((project, id) => {
            return (
              <div key={id} className="container-card">
                <img src={project.imageSrc} alt="img" className="image" />
                <h3 className="title">{project.title}</h3>
                <p className="description">{project.description}</p>
                <ul className="skills">
                  {project.skills.map((skill, id) => {
                    return (
                      <li key={id} className="skill">
                        {skill}
                      </li>
                    );
                  })}
                </ul>
                <div className="links">
                  <a href={project.demo} className="link">
                    Demo
                  </a>
                  <a href={project.source} className="link">
                    Source
                  </a>
                </div>
              </div>
            );
          })}
          <a
            className="anchor-link"
            offset={50}
            href="https://github.com/Deva9754?tab=repositories"
          >
            <FaGithub size={30} /> More..
          </a>
        </div>
      </div>
    </Container>
  );
};
export default Portfolio;
