import "./card.scss";
import { motion } from "framer-motion";

const Card = ({ name, desc, img, index }) => {
  return (
    <motion.div
      className="card"
      whileInView={{
        opacity: [0, 1],
        x: [-100, 0],
        y: [-100, 0],
        scale: [0.5, 1],
      }}
      transition={{ duration: 0.5, delay: index * 0.5 }}
      viewport={{ once: true }}
    >
      <motion.img
        src={img}
        alt=""
        whileHover={{ scale: 0.9 }}
        transition={{ duration: 1 }}
      />
      <div className="info">
        <p className="title">{name}</p>
        <p className="desc">{desc}</p>
      </div>
    </motion.div>
  );
};

export default Card;
