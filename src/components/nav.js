import React from "react";
import {Intro, Gallery, Contact} from "./buttons.js";

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <img src="../../src/assets/images/menu.png" className="menu" id="menu-btn" alt="menu" />
        <div className="nav-link">
          <Intro />
          <Gallery />
          <Contact />
        </div>
        <img src="../src/assets/images/logo.svg" className="logo hide" id="logo" alt="logo" />
      </div>
    );
  }
}

export default Nav;
