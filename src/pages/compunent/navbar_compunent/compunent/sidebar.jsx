import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import close from "./source/x.svg";

export const Sidebar = ({ stat, stat_fn, akunName, sectionFn }) => {
  const navi = useNavigate();

  return (
    <motion.div
      variants={{
        close: {
          left: "-200%",
          transition: { ease: "easeInOut" },
        },
        open: {
          left: "0",
          transition: { ease: "easeInOut" },
        },
      }}
      animate={stat ? "open" : "close"}
      className="sidebar"
    >
      <motion.img
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        className="sidebar-close"
        onClick={stat_fn}
        src={close}
        alt=""
      />
      <img className="sidebar-logo" src="./banner/jurnalicpptiny.png" alt="" />
      <div className="sidebar-container">
        <ul>
          {akunName ? (
            <li>
              <a>{akunName}</a>
            </li>
          ) : (
            <>
              {" "}
              <li>
                <a onClick={() => navigation("/login")}>Login</a>
              </li>
              <li>
                <a onClick={() => navigation("/signin")}>Sign in</a>
              </li>
            </>
          )}

          <li>
            {/* <a onClick={() => navigation("/pengembangan")}>About</a> */}
          </li>
          <li>
            <a onClick={() => navigation("/news")}>News</a>
          </li>

          <h2>Genre</h2>
          <li>
            <a
              onClick={() => {
                sectionFn("sastra", navi);
                stat_fn();
              }}
            >
              Sastra
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                sectionFn("informasi", navi);
                stat_fn();
              }}
            >
              Infromasi
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                sectionFn("artikel", navi);
                stat_fn();
              }}
            >
              Artikel
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                sectionFn("hiburan", navi);
                stat_fn();
              }}
            >
              Hiburan
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                sectionFn("IT", navi);
                stat_fn();
              }}
            >
              IT
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
