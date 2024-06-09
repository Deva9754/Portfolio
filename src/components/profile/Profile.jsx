import "./profile.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Profile = () => {
  return (
    <div className="profile">
      <img
        // src="https://img.freepik.com/free-vector/3d-cartoon-young-woman-smiling-circle-frame-character-illustration-vector-design_40876-3100.jpg?t=st=1717847349~exp=1717850949~hmac=bd3146252be5548c75cc3e08df130daf731afa2ec8b12cb34a24f8f84c736f63&w=740"
        alt="profile_img"
      />
      <h1>
        {" "}
        <span>I`m Devashish Sahu</span> Frontend developer based in India.
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
        voluptates eveniet soluta ut velit a assumenda voluptatibus dolorum
        laboriosam sapiente!
      </p>
      <div className="profile-action">
        <div className="profile-connect">
          {" "}
          <AnchorLink href="#contact" className="anchor-link" offset={50}>
            Connect with me{" "}
          </AnchorLink>
        </div>
        <div className="profile-resume">Resume</div>
      </div>
    </div>
  );
};
export default Profile;
