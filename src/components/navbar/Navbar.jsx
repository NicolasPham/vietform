import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//import logo
import { logoMain } from "../../assets/home";

const Navbar = () => {
  const navItem = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: "ABOUT",
      url: "/about",
    },
    {
      name: "FORMWORK",
      url: "/formwork",
    },
    {
      name: "PRECAST",
      url: "/precast",
    },
    {
      name: "PROJECTS",
      url: "/projects",
    },
  ];

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <img src={logoMain} alt="" />
          </Link>
        </div>
        <div className="menu">
          {navItem.map((item, index) => (
            <motion.div
              className="navItem"
              initial={{ opacity: 0, scale: 0.5, y: -50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.5,
              }}
            >
              <Link to={item.url} className="link hover">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
