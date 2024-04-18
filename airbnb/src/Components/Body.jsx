import React from "react";
import filler from "../images/filler.png";

export default function Body() {
  return (
    <section className="hero">
      <img src={filler} className="filler" />
      <h1 className="hero-title">hello world</h1>
      <p className="hero-description">
        I'm Sai a creative software engineer. Welcome to this website that I am
        creating in prep for an interview! <br></br>I am trying to make this
        website as cute as possible because I dont want to folow the boring
        template of creating airbnb. <br></br>Im jsut a a GIRLLLLLL. I'm just a
        girl in the world...
      </p>
    </section>
  );
}
