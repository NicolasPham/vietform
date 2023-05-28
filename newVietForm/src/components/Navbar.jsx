import { Link } from "react-router-dom";

import { useState } from "react";
import { logoMain, menu } from "../assets";
import { styles } from "../styles";

//import navLinks
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-screen flex justify-center py-3 yellow-gradient fixed top-0 h-[100px] z-20`}>
      <div className="w-full max-w-7xl flex justify-between items-center">
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src={logoMain}
            alt="logoMain"
            className="h-10 sm:h-20 w-auto object-contain"
          />
        </Link>

        <ul className="hidden sm:flex items-center gap-4 text-[20px] text-darkBlue">
          {navLinks.map((link) => (
            <li
              key={`nav-${link.id}`}
              className={`hover:text-light hover:translate-y-[-2px] font-[600] ${
                active === link.id ? "text-light" : ""
              }`}>
              <Link to={`${link.url}`} onClick={() => setActive(link.id)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex items-center relative h-full">
          <img
            src={menu}
            alt=""
            className="w-[30px] h-[30px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {toggle && (
            <div
              className={`absolute right-[-16px] top-[55px] yellow-gradient py-3 px-2 rounded-xl`}>
              <ul className="flex flex-col items-center justify-center gap-3">
                {navLinks.map((link) => (
                  <li
                    key={`nav-${link.id}`}
                    className="hover:text-light hover:translate-y-[-2px] font-[600]">
                    <Link
                      to={`/${link.id}`}
                      onClick={() => {
                        setToggle(!toggle);
                      }}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
