import AnchorLink from "react-anchor-link-smooth-scroll";
import "./profile.css";
const Profile = () => {
  const openPDF = () => {
    // Assuming your PDF file is named "example.pdf" and is located in the "public" folder
    var pdfPath = "/Devashish_sahu_Resume_frontend (2).pdf";

    // Open the PDF in a new tab
    window.open(pdfPath, "_blank");
  };

  return (
    <div className="profile">
      <img
        // src="https://img.freepik.com/free-vector/3d-cartoon-young-woman-smiling-circle-frame-character-illustration-vector-design_40876-3100.jpg?t=st=1717847349~exp=1717850949~hmac=bd3146252be5548c75cc3e08df130daf731afa2ec8b12cb34a24f8f84c736f63&w=740"
        alt="profile_img"
      />
      <h1>
        {" "}
        <span>I`m Devashish Sahu</span> Frontend developer.
      </h1>
      <p>
        As a dedicated Frontend Developer at Wipro since 2022, I specialize in
        crafting immersive user experiences using ReactJS, Redux, and
        JavaScript. I pay meticulous attention to detail in HTML and CSS, and
        leverage tools like Tailwind CSS and Material-UI for optimal performance
        and aesthetic appeal. I also excel in data visualization with D3.js and
        ensure seamless component integration through Storybook.{" "}
        {/*  My tenure at
        Wipro has empowered me to deliver innovative solutions while honing my
        expertise in frontend development.  */}
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
  );
};

export default Profile;
