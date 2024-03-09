import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MainNewsSection = () => {
  const [dataApi, setDataAPi] = useState(null);
  const navi = useNavigate();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL_NEWSDATA)
      .then((res) => res.json())
      .then((res) => {
        setDataAPi(res);
      });
  }, []);
  return (
    <>
      <div className="main-news-section">
        <div
          onClick={() => navi("/" + dataApi[0].url)}
          className="main-news-section-canvas"
        >
          <div className="main-news-section-canvas-wrap">
            <img
              src={
                dataApi
                  ? `${import.meta.env.VITE_API_URL_GET_IMAGE}/${
                      dataApi[0].img
                    }`
                  : "./banner/Nothing image.png"
              }
              className="main-news-section-img"
            />
          </div>
          <div className="main-news-section-desc">
            <h3>{dataApi ? dataApi[0].penulis[0] : "..."}</h3>
            <h2>{dataApi ? dataApi[0].judul : "..."}</h2>
            <p>
              {dataApi
                ? `${dataApi[0].penulis[1]}-${dataApi[0].penulis[2]}-${dataApi[0].penulis[3]}`
                : "..."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
