import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <section className="h-wrapper">
        <div className="flex-center paddings inner-width h-container">
          <div className="logo-div">
            <img src="./logo-ali.png" alt="logo" width={60} />
          </div>

          <div className="flex-center h-menu">
            <a href="">Residencies</a>
            <a href="">Our Services</a>
            <a href="">Contect Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contect</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Header;
