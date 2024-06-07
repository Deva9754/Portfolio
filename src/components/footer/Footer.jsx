import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
// import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={footer_logo} alt="footer-logo" />
            <p>designation with YOE and country</p>
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
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
