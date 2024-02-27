import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Pengembangan } from "./pages/pengembangan";
// import { NewsShowing } from "./pages/news";

////////url//////////
import { TrainingofYoungInnovationJournalist } from "./pages/newsPages/Training of Young Innovation Journalist";
import { MIRANDADANTEKATEKIPENGIRIMPESAN } from "./pages/newsPages/MIRANDA DAN TEKA-TEKI PENGIRIM PESAN";
import { Karyadivisisastra } from "./pages/newsPages/Karya divisi sastra";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="pengembangan" element={<Pengembangan />} />
          <Route
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
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
