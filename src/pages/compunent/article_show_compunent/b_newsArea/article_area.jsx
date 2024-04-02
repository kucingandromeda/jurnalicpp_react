import { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "./compunent/rating";

export const ArticleArea = ({ apiData }) => {
  const [dataApi, setDataApi] = useState(null);
  const [dataFromDb, setDataFromDb] = useState(null);
  const [rating, setRating] = useState(0);
  const [rateHidden, setRateHidden] = useState(false);
  const [rateLoad, setRateLoad] = useState(false);
  const [staticRate, setStaticRate] = useState(0);

  const [nama_akun, setNama_akun] = useState("");
  const smile = ":)";

  const navi = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL_NEWSDATA}${window.location.pathname}`)
      .then((res) => res.json())
      .then((resJSON) => {
        setDataFromDb(resJSON);
        fetch(import.meta.env.VITE_API_SESSION, { credentials: "include" })
          .then((res) => res.json())
          .then((res) => {
            if (!res.servertext) return;
            setNama_akun(res.nama_akun);

            const form = new FormData();
            form.append("user", res.nama_akun);
            form.append("judul", resJSON[0].judul);

            fetch(import.meta.env.VITE_API_CHECK_RATE, {
              method: "POST",
              credentials: "include",
              body: form,
            })
              .then((res) => res.json())
              .then((res) => {
                if (!res.stat) return;
                setStaticRate(res.value);
                setRating(res.value);
                setRateHidden(true);
              });
          });
      });

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

        <Rating
          apiData={apiData}
          dataFromDb={dataFromDb}
          staticRate={staticRate}
          rating={rating}
          rateHidden={rateHidden}
          setStaticRate={setStaticRate}
          setRating={setRating}
          setRateHidden={setRateHidden}
        ></Rating>
      </div>
    </>
  );
};
