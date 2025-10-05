import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./page/Portfolio";
import Contact from "./page/Contact";

function App() {
  return (
    <main className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
