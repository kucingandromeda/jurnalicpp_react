import { useEffect } from "react";
import { useState } from "react";

export const NewsArea = ({ apiData }) => {
  const [dataApi, setDataApi] = useState(null);
  useEffect(() => {
    if (apiData) {
      setDataApi(apiData);
    } else {
      fetch(
        `${import.meta.env.VITE_API_URL_SHOW_NEWS}${window.location.pathname}`
      )
        .then((res) => res.json())
        .then((res) => {
          setDataApi(res);
        });
    }
  }, []);

  return (
    <div className="news-area">
      <h1>{dataApi ? dataApi.judul : ""}</h1>
      {/* <div className="penulis">
        <p>By:</p>
        <p>Kucing andromeda</p>
        <p>tgl-mon-thn</p>
      </div> */}
      <img
        className="news-image"
        src={
          dataApi
            ? dataApi.img
              ? `${import.meta.env.VITE_API_URL_GET_IMAGE}/${dataApi.img}`
              : "./banner/Nothing image.png"
            : "./banner/Nothing image.png"
        }
        alt=""
      />
      <div className="paragraph">
        {dataApi
          ? dataApi.isi.map((value, i) => (
              <p key={i}>
                {value.prop ? (
                  value.prop.italic ? (
                    <i>{value.value}</i>
                  ) : (
                    "ops eror"
                  )
                ) : (
                  value.value
                )}
              </p>
            ))
          : ""}
      </div>
    </div>
  );
};
// `http://localhost:8000/getImg/${dataApi.img}`
