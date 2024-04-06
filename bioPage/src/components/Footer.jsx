import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import "../App.css";

function Footer() {
  return (
    <>
    <footer className="foot-container">
      <div className="contact">
      <a href="tel:+918287015235"><FaPhone className="cont"/></a>
      <a href="mailto:himanshuchau423@gmail.com"><IoMdMail className="cont" /></a>
      </div>
      <p className="claim">© 2024 CodeWithByte. All Rights Reserved.</p>
    </footer>
    </>
  );
}

export default Footer;