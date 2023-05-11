import "./precast.scss";

//import data from formwork folder
import { precastTypes } from "../data/precast/types";
import { introEN } from "../data/precast/intro.js";
import { precastIntro } from "../assets/precast/precast.js";
import { motion } from "framer-motion";

//import Card component:
import Card from "../components/card/Card";

const Precast = () => {
  const intro = introEN;

  return (
    <main className="precast">
      <motion.header
        initial={{ opacity: 0, y: 200, scale: 0.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span>PRECAST</span>
      </motion.header>
      {/* PRECAST SYTEM */}
      <div className="wrapper">
        <div className="intro">
          <motion.div
            className="left"
            className="left"
            whileInView={{ scale: [0, 1], rotate: [0, 360] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h1>Flexible Formwork Solutions</h1>
            <hr />
            {intro.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </motion.div>
          <div className="right">
            <img src={precastIntro} alt="" />
          </div>
        </div>

        <h1 className="featured">Formwork system</h1>
        <div className="content">
          {precastTypes.map((item, index) => (
            <Card
              name={item.name}
              desc={item.desc}
              img={item.img}
              key={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Precast;
