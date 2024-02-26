import { motion } from "framer-motion";
import close from "./source/x.svg";

export const Sidebar = ({ stat, stat_fn }) => {
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
          <li>
            <a>About</a>
          </li>
          <li>
            <a>New</a>
          </li>
          <h2>Genre</h2>
          <li>
            <a>Sastra</a>
          </li>
          <li>
            <a>Infromasi</a>
          </li>
          <li>
            <a>IT</a>
          </li>
          <li>
            <a>Politik</a>
          </li>
          <li>
            <a>Acara</a>
          </li>
          <li>
            <a>Game</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
