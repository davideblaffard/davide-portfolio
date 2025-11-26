import React from "react";

const Footer = () => {
  const handleBackToTop = () => {
    const el = document.getElementById("hero");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© 2025 Davide Blaffard</p>
        <button onClick={handleBackToTop} className="footer__back-to-top">
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
