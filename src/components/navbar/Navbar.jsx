import "./Navbar.css";
import abc from "../../assets/nav_underline.svg";
import menuopen from "../../assets/menu_open.svg";
import menuclose from "../../assets/menu_close.svg";

import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [image, setImage] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.width = "350px";
  };
  const closeMenu = () => {
    menuRef.current.style.width = "0";
  };
  return (
    <div className="navbar">
      {/* <img src={logo} alt="Logo" /> */}
      <img src={menuopen} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menuclose}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <p onClick={() => setImage("home")}>Home</p>
          {image === "home" ? <img src={abc} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#experience">
            <p onClick={() => setImage("experince")}>Experience</p>
          </AnchorLink>
          {image === "experience" ? <img src={abc} alt="" /> : <></>}
        </li>
        {/* <li>
          <AnchorLink className="anchor-link " offset={50} href="#About">
            <p onClick={() => setImage("About Me")}>About Me</p>
          </AnchorLink>
          {image === "About Me" ? <img src={abc} alt="" /> : <></>}
        </li> */}
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            <p onClick={() => setImage("Contact")}>Contact</p>{" "}
          </AnchorLink>

          {image === "Contact" ? <img src={abc} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Portfolio">
            <p onClick={() => setImage("Portfolio")}>Projects</p>
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
