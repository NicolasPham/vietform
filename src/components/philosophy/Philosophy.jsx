import "./philosophy.scss";
import { philosophyCard } from "../../data/about";
import PhiloCard from "./PhiloCard";
import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <section className="container philosophy">
      <motion.div
        className="upper"
        initial={{ opacity: 0, y: -100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1>VietForm's Philosophy</h1>
        <p>
          As a construction partner, we believe that a knowledgeable, healthy,
          and engaged team will deliver a superior end-product for our clients
          who put their trust in us.
        </p>
      </motion.div>
      <motion.div
        className="cards"
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {philosophyCard.map((item) => (
          <PhiloCard
            key={item.id}
            name={item.name}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Philosophy;
