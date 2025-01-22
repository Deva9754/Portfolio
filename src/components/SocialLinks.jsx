import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Container from "./container/Container";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} /> LinkedIn
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} /> Github
        </>
      ),
      href: "https://github.com/Deva9754",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} /> Mail
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} /> Resume
        </>
      ),
      href: "/Devashish_resume_reactjs.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <Container>
      <div className="flex flex-col top-[35%] right-0 fixed">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:mr-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                "" +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default SocialLinks;
