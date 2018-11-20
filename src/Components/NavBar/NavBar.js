import React from "react";
import "./navbar.css";

let NavBar = () => (
  <div>
    {" "}
    <ul className="ulbar">
      <li>
        <a href="default.asp">Home</a>
      </li>
      <li>
        <a href="">Dance</a>
      </li>
      <li>
        <a href="contact.asp">Gaming</a>
      </li>
      <li>
        <a href="about.asp">About</a>
      </li>
    </ul>
  </div>
);

export default NavBar;
