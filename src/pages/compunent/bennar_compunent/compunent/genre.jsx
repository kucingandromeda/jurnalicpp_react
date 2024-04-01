import { useNavigate } from "react-router-dom";

export const Genre = ({ admin, sectionFn }) => {
  const navigation = useNavigate();

  return (
    <div className="Genre-section">
      <h2 className="choice-title">
        {admin ? "kucing_andromeda" : "Choose your genre..."}
      </h2>
      <h2 className="genre-title">Selamat membaca</h2>
      {admin ? (
        ""
      ) : (
        <nav className="genre-container">
          {/* <a onClick={() => navigation("/sastra")}>Sastra</a> */}
          <a onClick={() => sectionFn("sastra", navigation)}>Sastra</a>
          <a onClick={() => sectionFn("artikel", navigation)}>Artikel</a>
          <a onClick={() => sectionFn("IT", navigation)}>IT</a>
          <a onClick={() => sectionFn("informasi", navigation)}>Informasi</a>
          <a onClick={() => sectionFn("hiburan", navigation)}>Hiburan</a>
        </nav>
      )}
    </div>
  );
};
