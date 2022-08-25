import React from "react";
import "../Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-copyright">
        Copyright &copy; {new Date().getFullYear()} Beauty Bundles by A'maree
      </div>
    </footer>
  );
}

export default Footer;
