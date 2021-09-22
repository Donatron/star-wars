import React, { Component } from "react";
import "./Home.css";
import ReactAudioPlayer from "react-audio-player";

class Home extends Component {
  render() {
    return (
      <div className="tc home">
        <ReactAudioPlayer
          src={require("../../assets/Star_Wars_Theme_Song.m4a")}
          autoPlay={true}
        />
        <section className="intro mv5">
          A long time ago, in a galaxy far, far away....
        </section>
        <div className="board">
          <div className="content">
            <p id="title">Episode X</p>
            <p className="subtitle">THE API STRIKES BACK</p>
            <br />
            <p>
              Devastation has beset the developer of this site as, after months
              of toiling over designing and developing a service to bring as
              much information as possible to the average Star Wars fan, the
              creators of the Swapi API used to power this site have taken the
              service down.
            </p>{" "}
            <br />
            <p>I know, gutted right?...</p> <br />
            <p>
              What was once a showpiece of my portfolio is now little more than
              this opening scroll.
            </p>{" "}
            <br />
            <p>
              I thank you, though, for dropping by. If you'd like to check out
              some of my other work, please click on the link below.
            </p>
            <b />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
