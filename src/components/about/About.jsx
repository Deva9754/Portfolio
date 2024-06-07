import "./About.css";
import theme from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>ABout me</h1>
        <img src={theme} alt="theme" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="profile_img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates repellat rem numquam accusantium dolor nemo, at
              temporibus optio, culpa animi hic, deserunt asperiores provident.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates repellat rem numquam accusantium dolor nemo, at
              temporibus optio, culpa animi hic, deserunt asperiores provident.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skills">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skills">
              <p>React</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skills">
              <p>Javascript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skills">
              <p>TailWind & Bootstrap</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievemnet">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};
export default About;
