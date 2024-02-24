import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { NewsShowing } from "./pages/news";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/news" element={<NewsShowing></NewsShowing>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
