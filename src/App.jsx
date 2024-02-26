import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
// import { NewsShowing } from "./pages/news";

////////url//////////
import { TrainingofYoungInnovationJournalist } from "./pages/newsPages/Training of Young Innovation Journalist";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
