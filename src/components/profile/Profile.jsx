// import AnchorLink from "react-anchor-link-smooth-scroll";
// import "./profile.css";
// import profile from "../../assets/profile.jpeg";
// import Container from "../container/Container";
// const Profile = () => {
//   const openPDF = () => {
//     var pdfPath = "/Devashish_resume_reactjs.pdf";

//     window.open(pdfPath, "_blank");
//   };

//   return (
//     <Container>
//       <div className="profile ">
//         <img className="image-eff" src={profile} alt="profile_img" />
//         <h1>
//           {" "}
//           <span>I&apos;m Devashish Sahu</span> Frontend developer.
//         </h1>
//         <p>
//           Experienced Frontend Developer with 2.8+ years of expertise, currently
//           working at Infinit Locus. currently worked on SuperTails, a
//           product-based application, delivering high-quality frontend solutions.
//           Skilled in building responsive user interfaces and optimizing
//           performance. Proficient in ReactJS, Redux, JavaScript, HTML/CSS,
//           D3.js, and styling frameworks like Tailwind CSS and Material-UI. Adept
//           at integrating components using Storybook to ensure seamless user
//           experiences.
//         </p>
//         <div className="profile-action">
//           <div className="profile-connect">
//             {" "}
//             <AnchorLink href="#contact" className="anchor-link" offset={50}>
//               Connect with me{" "}
//             </AnchorLink>
//           </div>
//           <div className="profile-resume" onClick={openPDF}>
//             Resume
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Profile;


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
        <TextSlider/>
        <p>
        I’m a skilled Frontend Developer with over 2.8 years of hands-on experience,
         currently working with Infinit Locus. I’ve contributed to the development of SuperTails,
          a product-focused application, where I consistently delivered high-quality and performant frontend solutions.
           My expertise includes modern technologies such as ReactJS, Redux, JavaScript, HTML/CSS, and D3.js,
            with a strong emphasis on crafting responsive, user-friendly interfaces.
             I’m also proficient in using design systems and utility-first frameworks like Tailwind CSS and Material-UI to build scalable and maintainable user interfaces.
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
