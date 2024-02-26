import { useEffect, useState } from "react";
import dataJson from "./../../../data/newsData.json";

export const Recomendation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const value = [];
    for (let i = 0; i < 3; i++) {
      value.push(dataJson[Math.floor(Math.random() * dataJson.length)]);
    }
    setData(data.concat(value));
  }, []);

  console.log(data);

  return (
    <div className="recomendation-section">
      <h1>Random container</h1>
      <div className="recomendation-container">
        {data.map((news, i) => (
          <img
            key={i}
            className="recomendation-item"
            src={"./banner/Nothing image.png"}
            alt=""
          />
        ))}
        {/* <div className="recomendation-item"></div>
        <div className="recomendation-item"></div>
        <div className="recomendation-item"></div> */}
      </div>
    </div>
  );
};
