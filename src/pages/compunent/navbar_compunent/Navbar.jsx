import "./navbar.css";
import menu from "./compunent/source/menu.svg";
import user from "./compunent/source/user.svg";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./compunent/sidebar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BackBlack } from "./compunent/backblack";

export const Navbar = ({ sectionFn }) => {
  const [open, setOpen] = useState(false);

  const closeOpen = () => setOpen((stat) => !stat);
  const navigation = useNavigate();

  const [akunName, setAkunName] = useState(null);
  const [showUserOpt, setShowUserOpt] = useState(false);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_SESSION, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.servertext) return;
        setAkunName(res.nama_akun);
      });
  }, []);

  const logout = () => {
    const form = new FormData();
    form.append("user", akunName);

    fetch(import.meta.env.VITE_API_LOGOUT, {
      method: "POST",
      body: form,
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.stat) return;
        window.location.reload();
      });
  };

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
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            className="menu"
            onClick={() => setOpen((stat) => !stat)}
            src={menu}
            alt="close"
          />

          <a onClick={() => sectionFn("news", navigation)}>News</a>
          {/* <a onClick={() => navigation("/pengembangan")}>More</a> */}
          {akunName ? (
            <>
              <div
                onClick={() => setShowUserOpt((stat) => !stat)}
                className="user-header"
              >
                <a className="user-link" style={{ margin: "0 10px 0 25px" }}>
                  {akunName}
                </a>
                <img className="user-logo" src={user} alt="user" />
              </div>
            </>
          ) : (
            <>
              <a onClick={() => navigation("/signin")}>Sign in</a>
              <a onClick={() => navigation("/login")}>Log in</a>
            </>
          )}
        </nav>
        <motion.div
          variants={{
            open: { opacity: 1 },
            close: { opacity: 0 },
          }}
          initial={"close"}
          animate={showUserOpt ? "open" : "close"}
          className="user-header-opt"
        >
          <motion.h3 onClick={logout} whileHover={{ x: 3 }} whileTap={{ x: 7 }}>
            Log out
          </motion.h3>
        </motion.div>
        <Sidebar
          stat={open}
          akunName={akunName}
          sectionFn={sectionFn}
          stat_fn={closeOpen}
        ></Sidebar>
      </header>
    </>
  );
};
