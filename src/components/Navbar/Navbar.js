import React from "react";
import "./Navbar.scss";
import fbiLogo from "../../assets/fbiLogo.png";

const Navbar = () => {
  return (
    <nav className="mainNav">
      <div className="mainNav__items">
        <div className="mainNav__items--logo">
          <a href="https://www.fbi.gov/">
            <img src={fbiLogo} alt="nav logo" />
          </a>
        </div>
        <div className="mainNav__items--title">
          <h1>FBI</h1>
        </div>
        <div className="mainNav__items--titleDescription">
          <span>FEDERAL BUREU OF INVESTIGATION</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
