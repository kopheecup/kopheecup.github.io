import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
  			<img src="../../src/assets/images/menu.png" className="menu" id="menu-btn" alt="menu" />
  			<div className="nav-link">
  				<span className="nav-link-btn" id="about-us-btn-nav">Intro</span>
  				<span className="nav-link-btn" id="gallery-btn-nav">Gallery</span>
  				<span className="nav-link-btn" id="login-btn-nav">Contact</span>
  			</div>
  			<img src="../src/assets/images/logo.svg" className="logo hide" id="logo" alt="logo" />
      </div>
    );
  }
}

export default Nav;
