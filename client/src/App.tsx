import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainUsers } from "./pages/MainUsers";
import { SavedUsers } from "./pages/SavedUsers";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainUsers />} />
        <Route path="/saved" element={<SavedUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
