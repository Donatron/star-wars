import axios from 'axios';

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_PERSON = 'FETCH_PERSON';

const ROOT_URL = 'https://swapi.co/api';

export function fetchPeople() {
  const request = axios.get(`${ROOT_URL}/people`);

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
