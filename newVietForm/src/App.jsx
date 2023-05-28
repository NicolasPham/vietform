import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
//Import pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Formwork from "./pages/Formwork.jsx";
import Precast from "./pages/Precast.jsx";
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
