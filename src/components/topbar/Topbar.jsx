import "./topbar.scss";
import { Facebook, Instagram, GitHub, LinkedIn } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            MNC.
          </a>
          <div className="itemContainer">
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.linkedin.com/in/mogamat-naeem-carr-6ab20a1a9/"
            >
              <LinkedIn className="icon" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="itemContainer">
            <a
              target="_blank"
              rel="noreferrer"
              href="http://github.com/naeem2000"
            >
              <GitHub className="icon" />
              <span>GitHub</span>
            </a>
          </div>
          <div className="itemContainer">
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.facebook.com/naeem.carr.3/"
            >
              <Facebook className="icon" />
              <span>Facebook</span>
            </a>
          </div>
          <div className="itemContainer">
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.instagram.com/naeem__carr/"
            >
              <Instagram className="icon" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
