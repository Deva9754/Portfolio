import css from "../assets/css.png";
import html from "../assets/html.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import mui from "../assets/logo.png";
import bootstrap from "../assets/bootstrap.png";
import D3 from "../assets/D3.png";
const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: github,
      title: "Github",
      style: "shadow-white	",
    },
    {
      id: 7,
      src: mui,
      title: "MUI",
      style: "shadow-sky-500",
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-indigo-500	",
    },
    {
      id: 8,
      src: D3,
      title: "D3",
      style: "shadow-sky-500",
    },
  ];
  return (
    <div id="experience" name="experince">
      <div className=" p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I`ve worked with.</p>
        </div>

        <div className="w-full flex  gap-8 text-center py-8 px-12 sm:px-0 flex-wrap justify-center">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={` relative p-3 shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img
                className="h-24 w-24 rounded-lg   md-h-full md-w-full "
                src={src}
                alt="Tech icons"
              />
              <p className=" mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience;
