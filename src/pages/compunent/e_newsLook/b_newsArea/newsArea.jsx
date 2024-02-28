import { useEffect } from "react";
import { useState } from "react";

export const NewsArea = () => {
  const [dataApi, setDataApi] = useState(null);
  const [isi, setIsi] = useState(null);

  const coma_fn = (data) => {
    const resultList = [];
    data.forEach((element) => {
      const result = element.value.replace(/{'}/g, '"');
      resultList.push(result);
    });
    setIsi(resultList);
  };

  useEffect(() => {
    fetch(`http://localhost:8000/getData${window.location.pathname}`)
      .then((res) => res.json())
      .then((res) => {
        coma_fn(res.isi);
        setDataApi(res);
      });
  }, []);
  // console.log(dataApi ? dataApi.isi[0] : null);
  console.log(isi);

  return (
    <div className="news-area">
      <h1>{dataApi ? dataApi.judul : ""}</h1>
      {/* <div className="penulis">
        <p>By:</p>
        <p>Kucing andromeda</p>
        <p>tgl-mon-thn</p>
      </div> */}
      <img className="news-image" src={"./banner/Nothing image.png"} alt="" />
      <div className="paragraph">
        {isi ? isi.map((value, i) => <p key={i}>{value}</p>) : ""}
      </div>
    </div>
  );
};
