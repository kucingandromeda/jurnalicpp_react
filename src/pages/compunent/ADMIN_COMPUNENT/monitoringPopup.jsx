import { useState } from "react";
import x from "./source/x.svg";

export const MonitoringPopUp = ({ editFn, idTarget }) => {
  const [selectValue, setSelectValue] = useState(null);
  const [inputText, setInputText] = useState(null);
  const [log, setLog] = useState(null);

  const selectFn = (e) => {
    const obj = {
      name: e.target.name,
      value: e.target.value,
    };
    setSelectValue(obj);
  };

  const inputFn = (e) => {
    setInputText(e.target.value);
  };

  const submitEdit = () => {
    if (!idTarget || !selectValue || !inputText)
      return setLog("maaf data tidak lengkap");

    const form = new FormData();

    form.append("id", idTarget.id);
    form.append("Bjudul", idTarget.Bjudul);
    form.append(selectValue.name, selectValue.value);
    form.append("new", inputText);

    fetch(import.meta.env.VITE_API_ADMIN_EDIT, {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((res) => {
        setLog(res.status);
      });
  };

  const submitDel = () => {
    const form = new FormData();
    form.append("id", idTarget.id);
    form.append("Bjudul", idTarget.Bjudul);

    fetch(import.meta.env.VITE_API_ADMIN_DEL, {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div className="monitoring-pop-up">
        <img
          className="monitoring-pop-up-close"
          src={x}
          alt="close"
          onClick={editFn}
        />
        {idTarget.stat === "edit" ? (
          <>
            <div className="monitoring-pop-up-choose">
              <h2>UPDATE</h2>
              <h3>pilih atribut yang akan diubah</h3>
              <select name="atribut" id="atribut" onChange={selectFn}>
                <option value="">pilih</option>
                <option value="judul">judul</option>
                <option value="penulis">penulis</option>
                <option value="genre">genre</option>
                <option value="img">img</option>
                <option value="url">url</option>
              </select>
            </div>
            <div className="monitoring-update">
              <form
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h2>masukkan data baru</h2>
                <input
                  className="input-txt"
                  type="text"
                  name="new"
                  onChange={inputFn}
                />
                <input
                  className="input-submit"
                  value={"i agree"}
                  onClick={(e) => {
                    e.preventDefault();
                    submitEdit();
                  }}
                  type="submit"
                />
              </form>
            </div>
            <div className="monitoring-log">
              <h3>LOG</h3>
              <p>{log ? log : "-"}</p>
            </div>
          </>
        ) : (
          <>
            <div className="monitoring-del">
              <h2>DELETE</h2>
              <p>yakin mau menghapus data id {idTarget.id}</p>
              <button
                className="input-submit"
                onClick={(e) => {
                  e.preventDefault();
                  submitDel();
                }}
              >
                yoi
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
