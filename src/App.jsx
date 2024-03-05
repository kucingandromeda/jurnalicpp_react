import "./App.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Pengembangan } from "./pages/pengembangan";
import { NewsShowing } from "./pages/template";
import { useState } from "react";

////////url//////////
import { TrainingofYoungInnovationJournalist } from "./pages/newsPages/Training of Young Innovation Journalist";
import { MIRANDADANTEKATEKIPENGIRIMPESAN } from "./pages/newsPages/MIRANDA DAN TEKA-TEKI PENGIRIM PESAN";
import { Karyadivisisastra } from "./pages/newsPages/Karya divisi sastra";

function App() {
  const [apiDataApp, setApiDataApp] = useState(null);
  // const navigation = useNavigate();
  const urlData = (data, navigation) => {
    fetch(`http://localhost:8000/getData/${data}`)
      .then((res) => {
        const lengthData = res.headers.get("Content-Length");

        const reader = res.body.getReader();
        let dataDiterima = 0;

        const read = () => {
          reader.read().then(({ done, value }) => {
            if (done) {
              return;
            }
            dataDiterima += value.length;
            read();
          });
        };
        read();

        res.json();
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

          {/* <Route
            path="Training-of-Young-Innovation-Journalist"
            element={<TrainingofYoungInnovationJournalist />}
          />
          <Route
            path="MIRANDA-DAN-TEKA-TEKI-PENGIRIM-PESAN"
            element={
              <MIRANDADANTEKATEKIPENGIRIMPESAN></MIRANDADANTEKATEKIPENGIRIMPESAN>
            }
          ></Route>
          <Route
            path="Karya-divisi-sastra"
            element={<Karyadivisisastra></Karyadivisisastra>}
          ></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
