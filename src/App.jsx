import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";

import { Home } from "./pages/home";
import { Pengembangan } from "./pages/pengembangan";
import { NewsShowing } from "./pages/template";
import { AdminPages } from "./pages/adminPages";

import { SectionPages } from "./pages/sectionPages";

function App() {
  const genreArray = useRef([
    "/news",
    "/sastra",
    "/IT",
    "/artikel",
    "/informasi",
    "/hiburan",
  ]);

  const [apiDataApp, setApiDataApp] = useState(null);
  const urlData = (data, navigation) => {
    fetch(`${import.meta.env.VITE_API_URL_SHOW_NEWS}/${data}`)
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        setApiDataApp(res);
        navigation(data);
      });
  };

  const [sectionNews, setSectionNews] = useState(null);
  const sectionFn = (type, navi) => {
    fetch(import.meta.env.VITE_API_SECTION + "/" + type)
      .then((res) => res.json())
      .then((res) => {
        setSectionNews(res);
        navi("/" + type);
      });
  };

  return (
    <>
      <Router>
        <Routes>
          {/* admin */}
          <Route path="admin" element={<AdminPages></AdminPages>} />

          {/* home */}
          <Route
            path="/"
            element={<Home urlFn={urlData} sectionFn={sectionFn}></Home>}
          />

          {/* news showing page */}

          {genreArray.current.map((genre, i) => (
            <Route
              key={i}
              path={genre}
              element={
                <SectionPages sectionFn={sectionFn} sectionNews={sectionNews} />
              }
            ></Route>
          ))}

          <Route path="*" element={<NewsShowing apiData={apiDataApp} />} />

          <Route path="pengembangan" element={<Pengembangan />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
