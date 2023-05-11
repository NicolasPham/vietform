import "./formwork.scss";

//import data from formwork folder
import { formworkTypes, scaffoldingType } from "../data/formwork/types.js";
import { introEN } from "../data/formwork/intro.js";
import { formworkIntro } from "../assets/home";
import { motion } from "framer-motion";

//import Card component:
import Card from "../components/card/Card";

const Formwork = () => {
  const intro = introEN;

  return (
    <main className="formwork">
      <motion.header
        initial={{ opacity: 0, y: 200, scale: 0.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span>FORMWORK</span>
      </motion.header>
      {/* FORMWORK SYTEM */}
      <div className="container wrapper">
        <div className="intro">
          <motion.div
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
          <motion.div
            className="right"
            whileInView={{ scale: [0, 1], y: [-500, 0] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img src={formworkIntro} alt="" />
          </motion.div>
        </div>

        <h1 className="featured">Formwork system</h1>
        <div className="content">
          {formworkTypes.map((item, index) => (
            <Card
              name={item.name}
              desc={item.desc}
              img={item.img}
              key={index}
              index={index}
            />
          ))}
        </div>

        {/* SCAFFOLDING SYSTEM */}

        <h1 className="featured">Scaffolding system</h1>
        <div className="content">
          {scaffoldingType.map((item, index) => (
            <Card
              name={item.name}
              desc={item.desc}
              img={item.img}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Formwork;
