import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
// import { NewsShowing } from "./pages/news";

////////url//////////
import { TrainingofYoungInnovationJournalist } from "./pages/newsPages/Training of Young Innovation Journalist";
import { MIRANDADANTEKATEKIPENGIRIMPESAN } from "./pages/newsPages/MIRANDA DAN TEKA-TEKI PENGIRIM PESAN";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          {/* <Route path="/news" element={<NewsShowing></NewsShowing>} /> */}
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
