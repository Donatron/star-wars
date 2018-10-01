import axios from 'axios';

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_PERSON = 'FETCH_PERSON';
export const FETCH_FILMS = 'FETCH_FILMS';
export const FETCH_FILM = 'FETCH_FILM';
export const FETCH_PLANETS = 'FETCH_PLANETS';
export const FETCH_PLANET = 'FETCH_PLANET';
export const FETCH_VEHICLES = 'FETCH_VEHICLES';
export const FETCH_VEHICLE = 'FETCH_VEHICLE';

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

export function fetchPlanets() {
  const request = axios.get(`${ROOT_URL}/planets`);

  return {
    type: FETCH_PLANETS,
    payload: request
  }
}

export function fetchPlanet(id) {
  const request = axios.get(`${ROOT_URL}/planets/${id}`);

  return {
    type: FETCH_PLANET,
    payload: request
  }
}

export function fetchVehicles() {
  let request = axios.get(`${ROOT_URL}/vehicles`);

  return {
    type: FETCH_VEHICLES,
    payload: request
  }
}

export function fetchVehicle(id) {
  let request = axios.get(`${ROOT_URL}/vehicles/${id}`);

  return {
    type: FETCH_VEHICLE,
    payload: request
  }
}
