import "./Navbar.css";
import abc from "../../assets/nav_underline.svg";

import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [image, setImage] = useState("home");
  return (
    <div className="Navbar">
      <img src="" alt="Logo" />
      <ul className="nav-menu">
        <li>
          <p onClick={() => setImage("home")}>Home</p>
          {image === "home" ? <img src={abc} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => setImage("services")}>Services</p>
          {image === "services" ? <img src={abc} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => setImage("About Me")}>About Me</p>
          {image === "About Me" ? <img src={abc} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            <p onClick={() => setImage("Contact")}>Contact</p>{" "}
          </AnchorLink>

          {image === "Contact" ? <img src={abc} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Portfolio">
            <p onClick={() => setImage("Portfolio")}>Portfolio</p>
          </AnchorLink>
          {image === "Portfolio" ? <img src={abc} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink href="#contact" className="anchor-link" offset={50}>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};
export default Navbar;
