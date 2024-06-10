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
          <h3 className=" font-bold">
            Frontend Developer at Wipro (May 2022 - Present)
          </h3>
          <p>
            As a dedicated Frontend Developer at Wipro since 2022, I&apos;ve
            spearheaded projects utilizing an array of cutting-edge
            technologies. My primary focus lies in crafting immersive user
            experiences through ReactJS, Redux, and JavaScript, coupled with
            meticulous attention to detail in HTML and CSS. Leveraging tools
            like Tailwind CSS and Material-UI, I&apos;ve refined interfaces for
            optimal performance and aesthetic appeal. Additionally, my
            proficiency extends to data visualization with D3.js and ensuring
            seamless component integration through Storybook. My tenure at Wipro
            has empowered me to deliver innovative solutions while honing my
            expertise in frontend development.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
