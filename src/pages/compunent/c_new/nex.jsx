import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArtikelItem } from "../articleItem/artikelItem";

export const New = ({ urlFn }) => {
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL_NEWSDATA + "/all")
      .then((res) => res.json())
      .then((res) => {
        const value = [];

        for (let i = 0; i < 6; i++) {
          if (res[i]) {
            value.push(res[i]);
          }
        }

        setData(data.concat(value));
      });
  }, []);

  const getApi = (url) => {
    urlFn(url, navigation);
  };

  return (
    <div className="New-section">
      <h1>News</h1>
      <div className="new-container">
        {data.map((news, i) => (
          <ArtikelItem news={news} i={i} getApi={getApi} key={i}></ArtikelItem>
        ))}
      </div>
    </div>
  );
};
