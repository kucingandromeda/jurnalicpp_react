import menu from "./source/menu.svg";
import { Sidebar } from "./sidebar";
import { motion } from "framer-motion";
import { useState } from "react";
import { BackBlack } from "./backblack";
import { useNavigate } from "react-router-dom";

export const HeaderNavNews = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigate();

  const closeOpen = () => setOpen((stat) => !stat);

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
          <a>Genre</a>
          <a>New</a>
          <a>About</a>
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
