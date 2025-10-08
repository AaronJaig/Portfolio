import "./App.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
// import ViewPortfolio from "./page/viewPortfolio"; // Capitalized component name
// import Contact from "./page/Contact";

function App() {
  return (
    <main className="main-content">
      <Navbar />
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
{
  /* <Route path="/Portfolio/view" element={<ViewPortfolio />} />
        <Route path="/Portfolio/contact" element={<Contact />} /> */
}
