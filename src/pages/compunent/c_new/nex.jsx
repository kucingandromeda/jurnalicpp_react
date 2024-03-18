import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const New = ({ urlFn }) => {
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL_NEWSDATA + "/all")
      .then((res) => res.json())
      .then((res) => {
        const value = [];

        for (let i = 0; i < 6; i++) {
          if (res[i]) {
            value.push(res[i]);
          }
        }

        setData(data.concat(value));
      });
  }, []);

  const getApi = (url) => {
    urlFn(url, navigation);
  };

  return (
    <div className="New-section">
      <h1>News</h1>
      <div className="new-container">
        {data.map((news, i) => (
          <motion.div
            key={i}
            className="new-conatiner-item"
            onClick={() => getApi(news.url)}
          >
            <div className="new-container-canvas">
              <img
                className="new-container-img"
                src={
                  news.img !== null
                    ? `${import.meta.env.VITE_API_URL_GET_IMAGE}/${news.url}/${
                        news.img
                      }`
                    : "./banner/Nothing image.png"
                }
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
