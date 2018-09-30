import axios from 'axios';

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_PERSON = 'FETCH_PERSON';
export const FETCH_FILMS = 'FETCH_FILMS';
export const FETCH_FILM = 'FETCH_FILM';

const ROOT_URL = 'https://swapi.co/api';

export function fetchPeople() {
  const request = axios.get(`${ROOT_URL}/people/`);

  return {
    type: FETCH_PEOPLE,
    payload: request
  };
}

export function fetchPerson(id) {
  const request = axios.get(`${ROOT_URL}/people/${id}`);

  return {
    type: FETCH_PERSON,
    payload: request
  };
}

export function fetchFilms() {
  const request = axios.get(`${ROOT_URL}/films`);

  return {
    type: FETCH_FILMS,
    payload: request
  }
}

export function fetchFilm(id) {
  const request = axios.get(`${ROOT_URL}/films/${id}`);

  return {
    type: FETCH_FILM,
    payload: request
  }
}
