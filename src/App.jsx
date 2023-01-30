import Testimonials from "./components/testimonials/Testimonials";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
