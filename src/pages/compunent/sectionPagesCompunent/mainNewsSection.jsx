import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { OtherNewsSection } from "./otherNewsSection";

export const MainNewsArea = ({ sectionNews }) => {
  const navi = useNavigate();
  const [news, setNews] = useState(null);

  useEffect(() => {
    if (!sectionNews) {
      fetch(import.meta.env.VITE_API_SECTION + window.location.pathname)
        .then((res) => res.json())
        .then((res) => {
          setNews(res);
        });
    } else {
      setNews(sectionNews);
    }
  }, [sectionNews]);

  return (
    <>
      {news ? (
        news[0] ? (
          <>
            <div className="main-news-section">
              <h1>{window.location.pathname.toUpperCase().replace("/", "")}</h1>
              <div className="main-news-up-to-date">
                <div
                  onClick={() => navi("/" + news[0].url)}
                  className="main-news-up-to-date-warp"
                >
                  <div className="main-news-up-to-date-canvas">
                    <img
                      className="main-news-up-to-date-img"
                      src={
                        news
                          ? news[0].img
                            ? `${import.meta.env.VITE_API_URL_GET_IMAGE}/${
                                news[0].url
                              }/${news[0].img}`
                            : "./banner/Nothing image.png"
                          : ""
                      }
                      alt="up-to-date image"
                    />
                  </div>
                  <div className="main-news-up-to-date-desc">
                    <p>
                      {news
                        ? `${JSON.parse(news[0].penulis)[1]}-${
                            JSON.parse(news[0].penulis)[2]
                          }-${JSON.parse(news[0].penulis)[3]}`
                        : ""}
                    </p>
                    <h1>{news ? news[0].judul : ""}</h1>
                    <p>{news ? JSON.parse(news[0].penulis)[0] : ""}</p>
                  </div>
                </div>
              </div>
            </div>
            <OtherNewsSection news={news}></OtherNewsSection>
          </>
        ) : (
          <div className="tidak-ada-konten">
            <img src="./banner/tidak ada konten.png" alt="img" />
          </div>
        )
      ) : (
        ""
      )}
    </>
  );
};
