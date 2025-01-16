import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Footer.css";
import Container from "../container/Container";

const Footer = () => {
  return (
    <Container>
      <div>
        <div className="footer">
          <div className="footer-top">
            <div className="footer-top-left">
              {/* <img src="" alt="footer-logo" /> */}
              <p>Front-end Developer with 2.8+ years of experience at wipro </p>
            </div>
            <div className="top-right">
              {/* <div className="footer-email-input">
              <img src={user_icon} alt="user-icon" />
              <input type="email" placeholder="enter your email" />
            </div> */}
              {/* <div className="footer-subscribe">Subscribe</div> */}
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <p className="footer-bottom-left">
              © 2024 Devashish sahu. All rights reserved
            </p>
            <div className="footer-bottom-right">
              <p>Term of services</p>
              <p> Privacy Policy</p>
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                {" "}
                <p>Connect with me</p>{" "}
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
