import menu from "./source/settings.svg";
import { useEffect, useState } from "react";

import { MonitoringPopUp } from "./monitoringPopup";

export const Monitoring = () => {
  const [newsData, setNewsData] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const [idEdit, setIdEDit] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL_NEWSDATA + "/all")
      .then((res) => res.json())
      .then((res) => setNewsData(res));
  }, []);

  const settingMenu = (id) => {
    const div = document.getElementById(id);
    const node = div.querySelector(".monitoring-value");
    const setting = div.querySelector(".monitoring-setting");
    node.classList.toggle("hide");
    setting.classList.toggle("show");
  };

  const edit = (id, Bjudul, img, stat) => {
    const obj = {
      id: id,
      Bjudul: Bjudul,
      img: img,
      stat: stat,
    };
    setIdEDit(obj);
    setPopUp((value) => !value);
  };

  return (
    <>
      {popUp ? (
        <MonitoringPopUp editFn={edit} idTarget={idEdit}></MonitoringPopUp>
      ) : (
        ""
      )}
      <div className="monitoring-section">
        <h1>Monitoring</h1>
        <div className="monitoring-DB">
          <h2>Database</h2>
          <div className="monitoring-db-newsdata">
            <h3>NewsData DB</h3>
            <div className="monitoring-container">
              {newsData ? (
                newsData.map((data, i) => (
                  <div
                    id={`newsdata_${i}`}
                    key={i}
                    className="monitoring-db-newsdata-show"
                  >
                    <img
                      src={menu}
                      className="monitoring-set"
                      alt="set"
                      onClick={() => {
                        settingMenu(`newsdata_${i}`);
                      }}
                    />
                    <div className="monitoring-value">
                      <p>id:{data.id}</p>
                      <p>judul:{data.judul}</p>
                      <p>penulis:{data.penulis}</p>
                      <p>genre:{data.genre}</p>
                      <p>img:{data.img}</p>
                      <p>url:{data.url}</p>
                    </div>
                    <div className="monitoring-setting">
                      <p
                        className="monitoring-edit"
                        onClick={() =>
                          edit(data.id, data.url, data.img, "edit")
                        }
                      >
                        EDIT
                      </p>
                      <p
                        className="monitoring-del"
                        onClick={() => edit(data.id, data.url, data.img, "del")}
                      >
                        DELETE
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>loading</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
