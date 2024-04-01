import { useNavigate } from "react-router-dom";
import { ArtikelItem } from "../article_container_compunent/compunent/article_item/artikelItem";

export const OtherNewsSection = ({ news }) => {
  console.log(news);
  const navi = useNavigate();
  return (
    <>
      <div className="other-news-section">
        {news
          ? news.map((newsdata, i) =>
              i !== 0 ? (
                <div
                  onClick={() => navi("/" + newsdata.url)}
                  key={i}
                  className="other-news-item"
                >
                  <div className="other-news-canvas">
                    <img
                      className="other-news-img"
                      src={
                        newsdata.img
                          ? `${import.meta.env.VITE_API_URL_GET_IMAGE}/${
                              newsdata.url
                            }/${newsdata.img}`
                          : "./banner/Nothing image.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="other-news-desc">
                    <h3>{newsdata.judul}</h3>
                    <p>{JSON.parse(newsdata.penulis)[0]}</p>
                    <p>
                      {JSON.parse(newsdata.penulis)[1] +
                        "-" +
                        JSON.parse(newsdata.penulis)[2] +
                        "-" +
                        JSON.parse(newsdata.penulis)[3]}
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )
            )
          : ""}
      </div>
    </>
  );
};
