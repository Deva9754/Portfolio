// import AnchorLink from "react-anchor-link-smooth-scroll";
// import "./profile.css";
// import profile from "../../assets/profile.jpeg";
// import Container from "../container/Container";
// const Profile = () => {
//   const openPDF = () => {
//     var pdfPath = "/Devashish_resume_reactjs.pdf";

//     window.open(pdfPath, "_blank");
//   };

import AnchorLink from "react-anchor-link-smooth-scroll";
import "./profile.css";
import profile from "../../assets/profile.jpeg";
import Container from "../container/Container";
import TextSlider from "../textSlider/TextSlider";

const Profile = () => {
  const openPDF = () => {
    var pdfPath = "/Devashish_resume_reactjs.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <Container>
      <div className="profile">
        <img className="image-eff" src={profile} alt="profile_img" />
        <h1>
          {" "}
          <span>I&apos;m Devashish Sahu</span> Frontend Developer.
        </h1>
        <TextSlider />
        <p>
          I’m a skilled Frontend Developer with over 3.6+ years of hands-on
          experience, currently working with Infinit Locus. I’ve contributed to
          the development of SuperTails, a product-focused application, where I
          consistently delivered high-quality and performant frontend solutions.
          My expertise includes modern technologies such as ReactJS, Redux,
          JavaScript, HTML/CSS, and D3.js, with a strong emphasis on crafting
          responsive, user-friendly interfaces. I’m also proficient in using
          design systems and utility-first frameworks like Tailwind CSS and
          Material-UI to build scalable and maintainable user interfaces.
        </p>
        <div className="profile-action">
          <AnchorLink href="#contact" className="anchor-link" offset={50}>
            <div className="profile-connect">Connect with me</div>
          </AnchorLink>
          <div className="profile-resume" onClick={openPDF}>
            Resume
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
