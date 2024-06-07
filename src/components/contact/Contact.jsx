import "./Contact.css";
import theme from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "31cfd88f-6f27-4e3f-96a4-ff7f6d39372b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("succesfully sent");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>
            I`m currently avaliable to take new oppourtunity, so feel free to
            connect
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>deva.sahu2001@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+917974075143</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p> Pune, Maharastra</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
