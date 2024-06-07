import "./profile.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Profile = () => {
  return (
    <div className="profile">
      <img
        src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg"
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
