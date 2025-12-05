// import css from "../assets/css.png";
// import html from "../assets/html.png";
// import react from "../assets/react.png";
// import javascript from "../assets/javascript.png";
// import tailwind from "../assets/tailwind.png";
// import github from "../assets/github.png";
// import mui from "../assets/logo.png";
// import bootstrap from "../assets/bootstrap.png";
// import D3 from "../assets/D3.png";
// import Container from "../components/container/Container";
// const Experience = () => {
//   const tech = [
//     {
//       id: 1,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 2,
//       src: css,
//       title: "CSS",
//       style: "shadow-blue-500",
//     },
//     {
//       id: 3,
//       src: javascript,
//       title: "JavaScript",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 4,
//       src: react,
//       title: "React",
//       style: "shadow-blue-500",
//     },
//     {
//       id: 5,
//       src: tailwind,
//       title: "Tailwind",
//       style: "shadow-sky-500",
//     },
//     {
//       id: 6,
//       src: github,
//       title: "Github",
//       style: "shadow-white	",
//     },
//     {
//       id: 7,
//       src: mui,
//       title: "MUI",
//       style: "shadow-sky-500",
//     },
//     {
//       id: 8,
//       src: bootstrap,
//       title: "Bootstrap",
//       style: "shadow-indigo-500	",
//     },
//     {
//       id: 8,
//       src: D3,
//       title: "D3",
//       style: "shadow-sky-500",
//     },
//   ];
//   return (
//     <Container>
//       <div id="experience" name="experince">
//         <div className=" p-4 flex flex-col justify-center w-full h-full text-white">
//           <div>
//             <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//               Experience
//             </p>
//             <p className="py-6">These are the technologies I`ve worked with.</p>
//           </div>

//           <div className="w-full flex  gap-8 text-center py-8  sm:px-0 flex-wrap justify-center">
//             {tech.map(({ id, src, title, style }) => (
//               <div
//                 key={id}
//                 className={` relative p-3 shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
//               >
//                 <img
//                   className="h-24 w-24 rounded-lg   md-h-full md-w-full "
//                   src={src}
//                   alt="Tech icons"
//                 />
//                 <p className=" mt-4">{title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };
// export default Experience;

import css from "../assets/css.png";
import html from "../assets/html.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import mui from "../assets/logo.png";
import bootstrap from "../assets/bootstrap.png";
import D3 from "../assets/D3.png";

// NEW COMPANY LOGO IMPORTS
import empyraLogo from "../assets/empyra.png";
import infiniteLogo from "../assets/infinite.jpeg";
import wiproLogo from "../assets/wipro.png";

import Container from "../components/container/Container";

const Experience = () => {
  const tech = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: react, title: "React", style: "shadow-blue-500" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-500" },
    { id: 6, src: github, title: "Github", style: "shadow-white" },
    { id: 7, src: mui, title: "MUI", style: "shadow-sky-500" },
    { id: 8, src: bootstrap, title: "Bootstrap", style: "shadow-indigo-500" },
    { id: 9, src: D3, title: "D3", style: "shadow-sky-500" },
  ];

  const experiences = [
    {
      id: 1,
      company: "Empyra Software Solutions",
      role: "Software Engineer - II | Bangalore, Karnataka ",
      duration: "May 2025 – Present",
      logo: empyraLogo,
      description:
        "Working on MyOneFlow, a large-scale Case Management platform using React.js, with a focus on improving accessibility, responsiveness, and performance across the applicationEnhanced data-heavy modules by migrating from MUI Grid to AG Grid, delivered a POC for MUI X, and refactored legacy components to strengthen accessibility and responsiveness.Owned the end-to-end development of the Referral Module and collaborated with product and engineering teams to streamline processes and deliver high-quality features.",
    },
    {
      id: 2,
      company: "Infinite Locus",
      role: "SDE- I  | Gurugram, Haryana",
      duration: "Sept 2024 - April 2025",
      logo: infiniteLogo,
      description:
        "Led the SuperTails platform revamp using React.js and Redux, improving user interface quality, responsiveness, and overall performance.Redesigned core components based on modern UI/UX patterns, collaborated with cross-functional teams to enhance workflows, and delivered high-impact updates for high-traffic customer-facing modules.Implemented modularization and reusable component structures, owned end-to-end feature delivery from architecture to deployment, and ensured stable and scalable releases.",
    },
    {
      id: 3,
      company: "Wipro",
      role: "Project Engineer | Pune, Maharastra",
      duration: "May 2022 - Sept 2024",
      logo: wiproLogo,
      description:
        "Developed and maintained a scalable, responsive platform using React.js and TailwindCSS, optimizing performance through code splitting and improving search experience with debouncing.Built reusable components, modularized the codebase for long-term scalability, and contributed to code reviews to ensure engineering best practices.Developed the Leave Tracking admin portal using React.js, Redux Toolkit, TypeScript, and MUI, enhancing search and filtering with debouncing and maintaining code quality through unit testing and best deployment practices.",
    },
    {
      id: 4,
      company: "Wipro",
      role: "Project Engineer Intern | Remote",
      duration: "Mar 2022 - May 2022",
      logo: wiproLogo,
      description:
        "Supported front-end development for enterprise-grade applications using React.js, Redux, and TailwindCSS, enhancing UI components and improving overall performance.Assisted in API integrations, contributed to state management, debugging, and unit testing, ensuring smooth and scalable functionality.Collaborated with senior developers and participated in deployment automation and Git-based workflows to streamline the development process.",
    },
  ];

  return (
    <Container>
      <div id="experience" className="w-full">
        <div className="p-4 text-white">
          <div className="mb-6">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Experience
            </p>
            <p className="py-4 text-gray-300">
              Professional timeline — Empyra → Infinite Locus → Supertails →
              Wipro
            </p>
          </div>

          <div className=" flex flex-col gap-10">
            {/* ==== TECHNOLOGIES SECTION ==== */}
            <div className="flex-1">
              <p className="text-2xl font-semibold mb-4">Technologies</p>

              <div className="w-full flex flex-wrap gap-8 justify-center">
                {tech.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`p-3 shadow-md hover:scale-105 duration-500 rounded-lg ${style}`}>
                    <img
                      className="h-24 w-24 object-contain"
                      src={src}
                      alt={title}
                    />
                    <p className="mt-4">{title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ==== TIMELINE SECTION ==== */}
            <div className="flex-1">
              <p className="text-2xl font-semibold mb-4">
                Professional Timeline
              </p>

              <div className="space-y-10">
                {experiences.map((exp, idx) => {
                  const isLast = idx === experiences.length - 1;

                  return (
                    <div key={exp.id} className="flex items-start gap-6">
                      {/* LOGO COLUMN */}
                      <div className="flex flex-col items-center">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-20 h-10 rounded-lg object-cover ring-2 ring-gray-200"
                        />

                        {/* Connector line */}
                        {!isLast && (
                          <div className="w-px bg-gray-600 flex-1 mt-2"></div>
                        )}
                      </div>

                      {/* CONTENT CARD */}
                      <div className="flex-1 bg-gray-800/40 p-4 rounded-md border border-gray-700">
                        <div className="flex items-start justify-between w-full">
                          {/* LEFT: Company + Role */}
                          <div>
                            <h3 className="text-lg font-bold">{exp.company}</h3>
                            <p className="text-sm text-gray-300">{exp.role}</p>
                          </div>

                          {/* RIGHT: Duration */}
                          <span className="text-sm text-gray-300 font-medium whitespace-nowrap ml-4">
                            {exp.duration}
                          </span>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="mt-3 text-gray-300 text-sm">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
