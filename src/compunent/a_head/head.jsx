import { Genre } from "./genre";

export const Head = () => {
  return (
    <>
      <div className="head">
        <div className="head-desc">
          <div className="head-title">
            <h1>
              <span>j</span>
              urnal
              <span>i</span>
              cpp
            </h1>
            <h3>the great news from the great school</h3>
          </div>
          <img className="head-img" src="./banner/banner.png" alt="banner" />
        </div>
      </div>
      <Genre></Genre>
    </>
  );
};
