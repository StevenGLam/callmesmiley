import React from "react";
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import email from "../img/email.png";

let arr = [instagram, facebook, email];
let socialIcons = arr.map(el => (
  <div className="innersocialdivs">
    <img className="socialimg" src={el} />
  </div>
));

let Social = () => (
  <section className="socialmediabar">
    <div>{socialIcons}</div>
  </section>
);

export default Social;
