import "./css.css";
import { motion } from "framer-motion";

export const ArtikelItem = ({ news, i, getApi }) => {
  return (
    <>
      <div
        onClick={() => getApi(news.url)}
        key={i}
        className="new-conatiner-item"
      >
        <div className="new-container-canvas">
          <img
            className="new-container-img"
            src={
              news.img
                ? `${import.meta.env.VITE_API_URL_GET_IMAGE}/${news.url}/${
                    news.img
                  }`
                : "./banner/Nothing image.png"
            }
            alt=""
          />
        </div>
        <div className="news-desc">
          <h3>{news.judul}</h3>
          <p>{JSON.parse(news.penulis)[0]}</p>
          <p>
            {JSON.parse(news.penulis)[1] +
              "-" +
              JSON.parse(news.penulis)[2] +
              "-" +
              JSON.parse(news.penulis)[3]}
          </p>
        </div>
      </div>
    </>
  );
};
