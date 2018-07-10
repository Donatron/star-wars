import React from 'react';
import './Films.css'

const FilmList = () => {
  return (
    <div className="tc white center films">
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/films/1.jpg')} className="db br2 br--top" alt="photo of star wars film poster." />
        <p>A New Hope</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/films/2.jpg')} className="db br2 br--top" alt="photo of star wars film poster." />
        <p>The Empire Strikes Back</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/films/3.jpg')} className="db br2 br--top" alt="photo of star wars film poster." />
        <p>Return Of The Jedi</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/films/4.jpg')} className="db br2 br--top" alt="photo of star wars film poster." />
        <p>The Phantom Menace</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/films/5.jpg')} className="db br2 br--top" alt="photo of star wars film poster." />
        <p>Attack Of The Clones</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/films/6.jpg')} className="db br2 br--top" alt="photo of star wars film poster." />
        <p>Revenge Of The Sith</p>
      </article>
      <article className="mv4 mw5 center">
        <img src={require('../../assets/img/films/7.jpg')} className="db br2 br--top" alt="photo of star wars film poster." />
        <p>The Force Awakens</p>
      </article>
    </div>
  )
}

export default FilmList;
