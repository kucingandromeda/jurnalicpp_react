import { useEffect } from "react";
import { useState } from "react";

export const NewsArea = ({ apiData }) => {
  const [dataApi, setDataApi] = useState(null);
  const [dataFromDb, setDataFromDb] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL_NEWSDATA}${window.location.pathname}`)
      .then((res) => res.json())
      .then((res) => setDataFromDb(res));

    if (apiData) {
      setDataApi(apiData);
    } else {
      fetch(
        `${import.meta.env.VITE_API_URL_SHOW_NEWS}${window.location.pathname}`
      )
        .then((res) => res.text())
        .then((res) => {
          setDataApi(res);
        });
    }
  }, []);

  return (
    <>
      <div className="news-area">
        {/* {dataFromDb ? dataFromDb[0].judul : "load"} */}
        <h1>{dataFromDb ? dataFromDb[0].judul : "loading"}</h1>
        <img
          className="news-image"
          src={
            dataFromDb
              ? dataFromDb[0].img
                ? `${import.meta.env.VITE_API_URL_GET_IMAGE}${
                    window.location.pathname
                  }/${dataFromDb[0].img}`
                : "./banner/Nothing image.png"
              : null
          }
          alt=""
        />
        {dataApi ? (
          <div
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: dataApi }}
          ></div>
        ) : null}
      </div>
    </>
  );
};
