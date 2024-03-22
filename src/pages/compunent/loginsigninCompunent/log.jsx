import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import exit from "./source/x.svg";
import load from "./source/loading.gif";

export const LoginsinginLog = ({ logPopup, setLogPopUpStat, errorLog }) => {
  const navi = useNavigate();
  const loadingDirection = () => {
    setTimeout(() => {
      navi("/");
    }, 2000);
    return <img className="log-loading" src={load} alt="loading" />;
  };
  return (
    <>
      <motion.div
        variants={{ hidden: { left: "-100%" }, show: { left: "5px" } }}
        animate={logPopup ? "show" : "hidden"}
        className={`login-signin-log ${
          logPopup ? "" : "login-signin-log-none"
        }`}
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          className="login-signin-log-exit"
          src={exit}
          alt="X"
          onClick={() => setLogPopUpStat(false)}
        />
        <h2>message</h2>
        <h3>{errorLog}</h3>
        {errorLog === "suksess" ? loadingDirection() : ""}
      </motion.div>
    </>
  );
};
