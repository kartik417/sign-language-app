import './App.css';
import Home from './pages/Home';
import Translator from './pages/Translator';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<Translator />} />
      </Routes>
    </Router>
  );
}

export default App;
