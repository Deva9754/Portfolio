import "./About.css";
import cursor from "../../assets/cursorIcon.png";
import image from "../../assets/aboutImage.png";

const About = () => {
  return (
    <div
      id="About"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" px-8">
        <h2 className=" px-14 text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </h2>
      </div>

      <div className="content">
        <img className="about-image" src={image} alt="image_about" />
        <img src={cursor} alt="" />
        <div className="about-item-text aboutItem">
          <h3 className=" font-bold">Frontend Developer</h3>
          <p>
            I`m a frontend developer with experience in building and optimized
            sites.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
