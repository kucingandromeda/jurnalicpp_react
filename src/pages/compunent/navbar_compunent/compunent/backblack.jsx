import { motion } from "framer-motion";

export const BackBlack = ({ stat }) => {
  return (
    <motion.div
      variants={{ open: { display: "block" }, close: { display: "none" } }}
      animate={stat ? "open" : "close"}
      className="backblack"
    ></motion.div>
  );
};
