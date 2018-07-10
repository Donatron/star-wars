import React from 'react';
import './Vehicles.css'

const VehicleList = () => {
  return (
    <div className="tc white vehicles">
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/vehicles/4.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>Sand Crawler</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/vehicles/6.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>T-16 skyhopper</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/vehicles/7.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>X-34 landspeeder</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/vehicles/8.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>TIE/LN starfighter</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/vehicles/14.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>Snowspeeder</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/vehicles/16.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>TIE bomber</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/vehicles/18.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>AT-AT</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/vehicles/19.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>AT-ST</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/vehicles/20.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>Storm IV Twin-Pod cloud car</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/vehicles/24.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>Sail barge</p>
      </article>
    </div>
  )
}

export default VehicleList;
