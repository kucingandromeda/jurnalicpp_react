import { Genre } from "./genre";

export const Head = ({ admin }) => {
  return (
    <>
      <div className="head">
        <div className="head-desc">
          <div className="head-title">
            {admin ? (
              ""
            ) : (
              <img
                className="head-logo"
                src="./banner/jurnalicpptiny.png"
                alt=""
              />
            )}
            {/* <h1>
              <span>j</span>
              urnal
              <span>i</span>
              cpp
            </h1> */}
            {admin ? "" : <h3>the great news from the great school</h3>}
          </div>
          <img
            className="head-img"
            src={admin ? "./banner/ADMIN.png" : "./banner/banner.png"}
            alt="banner"
          />
        </div>
      </div>
      <Genre admin={admin}></Genre>
    </>
  );
};
