import React from 'react';
import './Planets.css'

const PlanetList = () => {
  return (
    <div className="tc white center planets">
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/planets/2.jpg')} className="db br2 br--top" alt="star wars planet." />
        <p>Alderaan</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/planets/3.jpg')} className="db br2 br--top" alt="star wars planet." />
        <p>Yavin IV</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/planets/4.jpg')} className="db br2 br--top" alt="star wars planet." />
        <p>Hoth</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/planets/5.jpg')} className="db br2 br--top" alt="star wars planet." />
        <p>Dagobah</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/planets/6.jpg')} className="db br2 br--top" alt="star wars planet." />
        <p>Bespin</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/planets/7.jpg')} className="db br2 br--top" alt="star wars planet." />
        <p>Endor</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/planets/8.jpg')} className="db br2 br--top" alt="star wars planet." />
        <p>Naboo</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/planets/9.jpg')} className="db br2 br--top" alt="star wars planet." />
        <p>Coruscant</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/planets/10.jpg')} className="db br2 br--top" alt="star wars planet." />
        <p>Kamino</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/planets/11.jpg')} className="db br2 br--top" alt="star wars planet." />
        <p>Geonosis</p>
      </article>
    </div>
  )
}

export default PlanetList;
