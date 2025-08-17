import React, { useState } from "react";
import "./Header.css";
import { HiMenuAlt3 } from "react-icons/hi";
import OutsideClickHandler from "react-outside-click-handler";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlerMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flex-center paddings inner-width h-container">
        <div className="logo-div">
          <img src="./logo-ali.png" alt="logo" width={60} />
        </div>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false);
          }}
        >
          <div
            className="flex-center h-menu"
            style={handlerMenuStyle(menuOpen)}
          >
            <a href="">Residencies</a>
            <a href="">Our Services</a>
            <a href="">Contect Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contect</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <HiMenuAlt3 size={25} />
        </div>
      </div>
    </section>
  );
}
export default Header;
