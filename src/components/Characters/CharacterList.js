import React from 'react';
import './Character.css'

const CharacterList = () => {
  return (
    <div className="tc white center characters">
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/characters/1.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>Luke Skywalker</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/characters/2.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>C-3PO</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/characters/3.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>R2-D2</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/characters/4.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>Darth Vader</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/characters/5.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>Leia Organa</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/characters/6.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>Owen Lars</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/characters/7.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>Beru Whitesun lars</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/characters/8.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>R5-D4</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/characters/9.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>Biggs Darklighter</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/characters/10.jpg')} className="db br2 br--top" alt="photo of star wars character." />
        <p>Obi-Wan Kenobi</p>
      </article>
    </div>
  )
}

export default CharacterList;
