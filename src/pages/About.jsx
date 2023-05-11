import "./about.scss";
import { aboutEN, visionEN, coreValueEN, coreValueListEN } from "../data/about";

//import image from assets
import { about1, about2 } from "../assets/about/about.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="about container">
      <article className="wrapper">
        {/* ABOUT US SECTION */}

        <section className="content">
          <motion.div
            className="left"
            initial={{ opacity: 0, scale: 0.5, x: 500 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1>ABOUT US</h1>
            <hr />
            {aboutEN.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </motion.div>
          <div className="right">
            <img src={about1} alt="" />
          </div>
        </section>

        {/* VISION AND CORE VALUE SECTION */}

        <section className="content-reverse">
          <motion.div
            className="left"
            initial={{ opacity: 0, scale: 0.5, x: -500 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="item">
              <h1>VISION</h1>
              <hr />
              <p>{visionEN}</p>
            </div>
            <div className="item">
              <h1>CORE VALUES</h1>
              <hr />
              <p>{coreValueEN}</p>
              <ul>
                {coreValueListEN.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          <div className="right">
            <img src={about2} alt="" />
          </div>
        </section>
      </article>
    </main>
  );
};

export default About;
