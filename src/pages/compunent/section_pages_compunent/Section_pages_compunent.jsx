import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Section_pages_compunent.css";
import { MainSectionArticle } from "./compunent/main_article";
import { OtherArticle } from "./compunent/other_article";

export const SectionPage = ({ sectionNews }) => {
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
            <MainSectionArticle news={news} navi={navi}></MainSectionArticle>
            <OtherArticle news={news}></OtherArticle>
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
