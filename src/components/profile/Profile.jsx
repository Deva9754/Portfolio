import AnchorLink from "react-anchor-link-smooth-scroll";
import "./profile.css";
import profile from "../../assets/profile.jpeg";
import Container from "../container/Container";
const Profile = () => {
  const openPDF = () => {
    // Assuming your PDF file is named "example.pdf" and is located in the "public" folder
    var pdfPath = "/Devashish_sahu_Resume_frontend (2).pdf";

    // Open the PDF in a new tab
    window.open(pdfPath, "_blank");
  };

  return (
    <Container>
      <div className="profile ">
        <img className="image-eff" src={profile} alt="profile_img" />
        <h1>
          {" "}
          <span>I&apos;m Devashish Sahu</span> Frontend developer.
        </h1>
        <p>
          Experienced Frontend Developer at Wipro adept in crafting immersive
          user interfaces with ReactJS, Redux, and JavaScript. Proficient in
          HTML/CSS with tools like Tailwind CSS and Material-UI, and skilled in
          data visualization using D3.js. Ensures seamless component integration
          through Storybook for optimal performance and aesthetic appeal. My
          tenure at Wipro has empowered me to deliver innovative solutions while
          honing my expertise in frontend development.
        </p>
        <div className="profile-action">
          <div className="profile-connect">
            {" "}
            <AnchorLink href="#contact" className="anchor-link" offset={50}>
              Connect with me{" "}
            </AnchorLink>
          </div>
          <div className="profile-resume" onClick={openPDF}>
            Resume
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
