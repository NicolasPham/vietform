import "./home.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//import images from assests
import {
  homeFormwork,
  homePrecast,
  homeIntro,
  homeModular,
  logoSub,
  slogan,
} from "../assets/home";
import { capacityEN } from "../data/about";
import Philosophy from "../components/philosophy/Philosophy";
import Banner from "../components/homeComponents/Banner";

const Home = () => {
  //create homepage carousel
  const imgCarousel = [
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1575971637203-d6255d9947a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1602497485099-e41a116a272c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];

  const options = [
    {
      name: "FORMWORK",
      url: "/formwork",
      image: homeFormwork,
    },
    {
      name: "PRECAST",
      url: "/precast",
      image: homePrecast,
    },
    {
      name: "MODULAR HOUSES",
      url: "/modular-houses",
      image: homeModular,
    },
  ];

  return (
    <main className="home">
      <Banner />

      <div className="container">
        <section className="capacity">
          <div className="left">
            <div className="title">
              <hr />
              <h1>Who We Are</h1>
            </div>

            <motion.div
              initial={{ x: -100, scale: 0.5, opacity: 0 }}
              whileInView={{ x: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="desc">
              <p>{capacityEN}</p>
              <Link to="/about" className="link">
                <button>Know more</button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            className="right">
            <img src={homeIntro} alt="" />
          </motion.div>
        </section>

        <section className="options" id="whatWeDo">
          <h1>What We Do</h1>
          <hr />
          <div className="options-container">
            {options.map((item, index) => (
              <motion.div
                initial={{ y: -50, opacity: 0, scale: 0.2 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
                viewport={{ once: true }}
                key={index}
                className="option">
                <img src={item.image} alt="" />
                <Link to={item.url} className="link">
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="home-philosophy">
          <Philosophy />
        </section>
      </div>
    </main>
  );
};

export default Home;
