import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import close from "./source/x.svg";

export const Sidebar = ({ stat, stat_fn }) => {
  const navigation = useNavigate();

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
            <a onClick={() => navigation("/pengembangan")}>About</a>
          </li>
          <li>
            <a onClick={() => navigation("/pengembangan")}>News</a>
          </li>
          <h2>Genre</h2>
          <li>
            <a onClick={() => navigation("/pengembangan")}>Sastra</a>
          </li>
          <li>
            <a onClick={() => navigation("/pengembangan")}>Infromasi</a>
          </li>
          <li>
            <a onClick={() => navigation("/pengembangan")}>IT</a>
          </li>
          <li>
            <a onClick={() => navigation("/pengembangan")}>Artikel</a>
          </li>
          <li>
            <a onClick={() => navigation("/pengembangan")}>Acara</a>
          </li>
          <li>
            <a onClick={() => navigation("/pengembangan")}>Game</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
