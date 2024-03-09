import { useEffect, useState } from "react";

export const Recomendation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL_NEWSDATA + "/all")
      .then((res) => res.json())
      .then((res) => {
        const value = [];
        for (let i = 0; i < 3; i++) {
          value.push(res[Math.floor(Math.random() * res.length)]);
        }
        setData(data.concat(value));
      });
  }, []);

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
