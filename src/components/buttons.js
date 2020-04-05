import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <span className = "nav-link-btn"
            id = "about-btn-nav"
      >
        Intro
      </span>
    )
  }
}

class Gallery extends React.Component {
  render() {
    return (
      <span className = "nav-link-btn"
            id = "gallery-btn-nav"
      >
        Gallery
      </span>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <span className = "nav-link-btn"
            id = "contact-btn-nav"
      >
        Contact
      </span>
    )
  }
}

export {
  Intro,
  Gallery,
  Contact
}
