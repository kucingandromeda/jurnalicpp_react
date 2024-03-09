import { useNavigate } from "react-router-dom";

export const Genre = ({ admin }) => {
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
          <a onClick={() => navigation("pengembangan")}>Sastra</a>
          <a onClick={() => navigation("pengembangan")}>Artikel</a>
          <a onClick={() => navigation("pengembangan")}>IT</a>
          <a onClick={() => navigation("pengembangan")}>Politik</a>
          <a onClick={() => navigation("pengembangan")}>Acara</a>
          <a onClick={() => navigation("pengembangan")}>Game</a>
        </nav>
      )}
    </div>
  );
};
