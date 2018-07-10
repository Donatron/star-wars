import React from 'react';
import './Starships.css';

const StarshipList = () => {
  return (
    <div className="tc white starships">
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/starships/5.jpg')} className="db br2 br--top" alt="photo of star wars starship." />
        <p>Sentinel-class landing craft</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/starships/9.jpg')} className="db br2 br--top" alt="photo of star wars starship." />
        <p>Death Star</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/starships/10.jpg')} className="db br2 br--top" alt="photo of star wars starship." />
        <p>Millennium Falcon</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/starships/11.jpg')} className="db br2 br--top" alt="photo of star wars starship." />
        <p>Y-wing</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/starships/12.jpg')} className="db br2 br--top" alt="photo of star wars starship." />
        <p>X-wing</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/starships/13.jpg')} className="db br2 br--top" alt="photo of star wars starship." />
        <p>TIE Advanced x1</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/starships/15.jpg')} className="db br2 br--top" alt="photo of star wars starship." />
        <p>Executor</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/starships/21.jpg')} className="db br2 br--top" alt="photo of star wars starship." />
        <p>Slave 1</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/starships/22.jpg')} className="db br2 br--top" alt="photo of star wars starship." />
        <p>Imperial shuttle</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/starships/23.jpg')} className="db br2 br--top" alt="photo of star wars starship." />
        <p>EF76 Nebulon-B escort frigate</p>
      </article>
    </div>
  )
}

export default StarshipList;
