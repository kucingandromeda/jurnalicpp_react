import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Pengembangan } from "./pages/pengembangan";
import { NewsShowing } from "./pages/template";
import { useState } from "react";

function App() {
  const [apiDataApp, setApiDataApp] = useState(null);
  const urlData = (data, navigation) => {
    console.log(`${import.meta.env.VITE_API_URL_SHOW_NEWS}/${data}`);
    fetch(`${import.meta.env.VITE_API_URL_SHOW_NEWS}/${data}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setApiDataApp(res);
        navigation(data);
      });
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home urlFn={urlData}></Home>} />

          <Route path="pengembangan" element={<Pengembangan />} />

          <Route path="*" element={<NewsShowing apiData={apiDataApp} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
