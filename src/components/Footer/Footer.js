import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        {"\u00A9"} {new Date().getFullYear()}{" "}
        <a
          href="https://donatron.github.io/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don Macarthur
        </a>
      </p>
    </div>
  );
};

export default Footer;

// alert('\u00A9')
