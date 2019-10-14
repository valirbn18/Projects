import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <ul className="contact-list">
        <li>
          <i className="fas fa-map-marker-alt" />
          <span>My City:</span>
          <a href="/">Los Angeles</a>
        </li>
        <li>
          <i className="fas fa-phone-alt" />
          <span>8 800 505-04-83</span>
        </li>
      </ul>{" "}
    </>
  );
};

export default Contact;
