import star from "./source/star.svg";
import starYellow from "./source/star_yellow.svg";
import loading from "./source/loading.gif";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// staticRate, rating, rateHidden,setStaticRate,setRating,setRateHidden
export const Rating = ({
  apiData,
  dataFromDb,
  staticRate,
  rating,
  rateHidden,
  setStaticRate,
  setRating,
  setRateHidden,
}) => {
  const [rateLoad, setRateLoad] = useState(false);

  const navi = useNavigate();

  const rateFn = () => {
    setRateLoad(true);
    fetch(import.meta.env.VITE_API_SESSION, { credentials: "include" })
      .then((res) => res.json())
      .then((res) => {
        if (!res.servertext) return navi("/login");

        const form = new FormData();
        form.append("user", res.nama_akun);
        form.append("judul", dataFromDb[0].judul);
        form.append("rating", rating);

        fetch(import.meta.env.VITE_API_RATING, {
          method: "POST",
          credentials: "include",
          body: form,
        })
          .then((res) => res.json())
          .then((res) => {
            if (!res.stat) return;
            setRateLoad(false);
            setRateHidden(true);
            setStaticRate(rating);
          });
      });
  };

  return (
    <>
      <div className="rating">
        <img src="./banner/rating_img.png" alt="" />
        <div className="rating-container">
          <h2>Rate this article</h2>

          <div className="star-container">
            <img
              onMouseMove={() => setRating(1)}
              onMouseLeave={() => setRating(staticRate)}
              onClick={rateFn}
              src={rating >= 1 ? starYellow : star}
              alt="star"
            />
            <img
              onMouseMove={() => setRating(2)}
              onMouseLeave={() => setRating(staticRate)}
              onClick={rateFn}
              src={rating >= 2 ? starYellow : star}
              alt="star"
            />
            <img
              onMouseMove={() => setRating(3)}
              onMouseLeave={() => setRating(staticRate)}
              onClick={rateFn}
              src={rating >= 3 ? starYellow : star}
              alt="star"
            />
          </div>

          {rateLoad ? (
            <img style={{ maxWidth: 75 }} src={loading} alt="loading" />
          ) : (
            <h2 style={rateHidden ? { opacity: 1 } : { opacity: 0 }}>
              THX for your rating
            </h2>
          )}
        </div>
      </div>
    </>
  );
};
