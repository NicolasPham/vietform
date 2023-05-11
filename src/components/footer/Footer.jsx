import "./footer.scss";
import { contact } from "../../data/about.js";

import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  const data = contact[0];
  return (
    <footer>
      <div className="wrapper">
        <h1>{data.name}</h1>
        <p>{data.address}</p>

        <div className="contact">
          <div className="item">
            <AiOutlineMail /> {data.email}
          </div>
          <div className="item">
            <FiPhoneCall/> {data.phone}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
