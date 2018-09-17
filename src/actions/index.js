import axios from 'axios';

export const FETCH_PEOPLE = 'FETCH_PEOPLE';

const ROOT_URL = 'https://swapi.co/api';

export function fetchPeople() {
  const request = axios.get(`${ROOT_URL}/people`);

  return {
    type: FETCH_PEOPLE,
    payload: request
  };
}
