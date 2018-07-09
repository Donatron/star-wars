import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="tc home">
      <audio preload="auto" autoPlay>
        <source src="../assets/audio/Star_Wars_original_opening_crawl_1977.mp3" type="audio/mpeg" />
      </audio>

      <section className="intro pa3 pa5-ns">A long time ago, in a galaxy far, far away....</section>
      <div id="board">
        <div id="content">
          <p id="title">Episode I</p>
          <p id="subtitle">THE FANDOM MENACE</p>
          <br />
          <p>Confusion has gripped the film-going public as the ever-growing Star Wars universe continues to release new, and spin-off movies.</p> <br />
          <p>With each new addition to the franchise come new characters, planets, species and starships.</p> <br />
          <p>Struggling to keep track of all there is to know the fans look for a hero. A one-stop resource. Their go-to place for all they need to know about Star Wars.</p> <br />
          <p>Among all the chaos there has emerged A New Hope.......</p><b />
          <p>This website.</p><br />
          <p>Click the links above for all you need to know.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
