import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import components
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
//Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Formwork from "./pages/Formwork";
import Precast from "./pages/Precast";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/formwork" element={<Formwork />} />
          <Route path="/precast" element={<Precast />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
