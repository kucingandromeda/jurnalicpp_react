import menu from "./source/menu.svg";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { motion } from "framer-motion";
import { useState } from "react";
import { BackBlack } from "./backblack";

export const HeaderNav = ({ sectionFn }) => {
  const [open, setOpen] = useState(false);

  const closeOpen = () => setOpen((stat) => !stat);
  const navigation = useNavigate();

  return (
    <>
      <BackBlack stat={open}></BackBlack>
      <header className="headerNav">
        <img
          onClick={() => navigation("/")}
          className="header-nav-logo"
          src="./banner/jurnalicpptiny.png"
          alt=""
        />
        <nav className="headerNav-nav">
          <a onClick={() => sectionFn("news", navigation)}>News</a>
          <a onClick={() => navigation("/pengembangan")}>Contact</a>
          <a onClick={() => navigation("/pengembangan")}>About</a>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            className="menu"
            onClick={() => setOpen((stat) => !stat)}
            src={menu}
            alt="close"
          />
        </nav>
        <Sidebar stat={open} stat_fn={closeOpen}></Sidebar>
      </header>
    </>
  );
};
