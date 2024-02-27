import { useEffect, useState } from "react";
import dataJson from "./../../../data/newsData.json";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const New = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    const value = [];

    for (let i = 0; i < 6; i++) {
      if (dataJson[i]) {
        value.push(dataJson[i]);
      }
    }

    setData(data.concat(value));
  }, []);

  return (
    <div className="New-section">
      <h1>News</h1>
      <div className="new-container">
        {/* <div className="new-conatiner-item">
          <div className="new-container-img"></div>
          <h3 className="new-container-desc"></h3>
        </div> */}

        {data.map((news, i) => (
          <motion.div
            key={i}
            className="new-conatiner-item"
            onClick={() => navigation(news.url)}
          >
            <div className="new-container-canvas">
              <img
                className="new-container-img"
                src={news.img ? news.img : "./banner/Nothing image.png"}
                alt={`${news.judul}_img`}
              />
            </div>
            <h3 className="new-container-desc">{news.judul}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
