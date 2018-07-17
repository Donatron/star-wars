import React from 'react';
import './Species.css'

const SpeciesList = () => {
  return (
    <div className="tc white species">
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/species/1.jpg')} className="db br2 br--top" alt="star wars species." />
        <p>Human</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/species/2.jpg')} className="db br2 br--top" alt="star wars species." />
        <p>Droid</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/species/3.jpg')} className="db br2 br--top" alt="star wars species." />
        <p>Wookiee</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/species/4.jpg')} className="db br2 br--top" alt="star wars species." />
        <p>Rodian</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/species/5.jpg')} className="db br2 br--top" alt="star wars species." />
        <p>Hutt</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/species/6.jpg')} className="db br2 br--top" alt="star wars species." />
        <p>Yoda's Species</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/species/7.jpg')} className="db br2 br--top" alt="star wars species." />
        <p>Trandoshan</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/species/8.jpg')} className="db br2 br--top" alt="star wars species." />
        <p>Mon Calamari</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/species/9.jpg')} className="db br2 br--top" alt="star wars species." />
        <p>Ewok</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/species/10.jpg')} className="db br2 br--top" alt="star wars species." />
        <p>Sullustan</p>
      </article>
    </div>
  )
}

export default SpeciesList;
