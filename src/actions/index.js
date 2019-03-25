import axios from "axios";

export const FETCH_PEOPLE = "FETCH_PEOPLE";
export const FETCH_PERSON = "FETCH_PERSON";
export const FETCH_FILMS = "FETCH_FILMS";
export const FETCH_FILM = "FETCH_FILM";
export const FETCH_PLANETS = "FETCH_PLANETS";
export const FETCH_PLANET = "FETCH_PLANET";
export const FETCH_VEHICLES = "FETCH_VEHICLES";
export const FETCH_VEHICLE = "FETCH_VEHICLE";
export const FETCH_STARSHIPS = "FETCH_STARSHIPS";
export const FETCH_STARSHIP = "FETCH_STARSHIP";
export const FETCH_SPECIES = "FETCH_SPECIES";
export const FETCH_SPECIE = "FETCH_SPECIE";

const ROOT_URL = "https://swapi.co/api";

export const fetchPeople = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/people/`);

  // Assign results to array to allow further results to be concatenated later
  let resultsArray = response.data.results;

  // Assign "next" api page to variable to allow next api call
  let next = await response.data.next;

  // Create index to allow while loop
  let counter = 0;

  if (next !== null) {
    while (counter < 1) {
      // Call next api page
      const request = await axios.get(next);

      // Assign results to variable and iterate over it, adding results to original resultsArray
      let results = await request.data.results;
      next = await request.data.next;

      // Iterate over fetched data and add to resultsArray
      for (let result of results) {
        resultsArray.push(result);
      }

      // If next value is null, increment counter to end while loop
      if (next === null) {
        counter++;
      }
    }
  }

  dispatch({
    type: FETCH_PEOPLE,
    payload: resultsArray
  });
};

export const fetchPerson = id => async dispatch => {
  const request = await axios.get(`${ROOT_URL}/people/${id}`);

  dispatch({
    type: FETCH_PERSON,
    payload: request
  });
};

export const fetchFilms = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/films/`);

  // Assign results to array to allow further results to be concatenated later
  let resultsArray = response.data.results;

  // Assign "next" api page to variable to allow next api call
  let next = await response.data.next;

  // Create index to allow while loop
  let counter = 0;

  if (next !== null) {
    while (counter < 1) {
      // Call next api page
      const request = await axios.get(next);

      // Assign results to variable and iterate over it, adding results to original resultsArray
      let results = await request.data.results;
      next = await request.data.next;

      // Iterate over fetched data and add to resultsArray
      for (let result of results) {
        resultsArray.push(result);
      }

      // If next value is null, increment counter to end while loop
      if (next === null) {
        counter++;
      }
    }
  }

  dispatch({
    type: FETCH_FILMS,
    payload: resultsArray
  });
};

export function fetchFilm(id) {
  const request = axios.get(`${ROOT_URL}/films/${id}`);

  return {
    type: FETCH_FILM,
    payload: request
  };
}

export const fetchPlanets = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/planets/`);

  // Assign results to array to allow further results to be concatenated later
  let resultsArray = response.data.results;

  // Assign "next" api page to variable to allow next api call
  let next = await response.data.next;

  // Create index to allow while loop
  let counter = 0;

  if (next !== null) {
    while (counter < 1) {
      // Call next api page
      const request = await axios.get(next);

      // Assign results to variable and iterate over it, adding results to original resultsArray
      let results = await request.data.results;
      next = await request.data.next;

      // Iterate over fetched data and add to resultsArray
      for (let result of results) {
        resultsArray.push(result);
      }

      // If next value is null, increment counter to end while loop
      if (next === null) {
        counter++;
      }
    }
  }

  dispatch({
    type: FETCH_PLANETS,
    payload: resultsArray
  });
};

export function fetchPlanet(id) {
  const request = axios.get(`${ROOT_URL}/planets/${id}`);

  return {
    type: FETCH_PLANET,
    payload: request
  };
}

export const fetchVehicles = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/vehicles/`);

  // Assign results to array to allow further results to be concatenated later
  let resultsArray = response.data.results;

  // Assign "next" api page to variable to allow next api call
  let next = await response.data.next;

  // Create index to allow while loop
  let counter = 0;

  if (next !== null) {
    while (counter < 1) {
      // Call next api page
      const request = await axios.get(next);

      // Assign results to variable and iterate over it, adding results to original resultsArray
      let results = await request.data.results;
      next = await request.data.next;

      // Iterate over fetched data and add to resultsArray
      for (let result of results) {
        resultsArray.push(result);
      }

      // If next value is null, increment counter to end while loop
      if (next === null) {
        counter++;
      }
    }
  }

  dispatch({
    type: FETCH_VEHICLES,
    payload: resultsArray
  });
};

export function fetchVehicle(id) {
  let request = axios.get(`${ROOT_URL}/vehicles/${id}`);

  return {
    type: FETCH_VEHICLE,
    payload: request
  };
}

export const fetchStarships = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/starships/`);

  // Assign results to array to allow further results to be concatenated later
  let resultsArray = response.data.results;

  // Assign "next" api page to variable to allow next api call
  let next = await response.data.next;

  // Create index to allow while loop
  let counter = 0;

  if (next !== null) {
    while (counter < 1) {
      // Call next api page
      const request = await axios.get(next);

      // Assign results to variable and iterate over it, adding results to original resultsArray
      let results = await request.data.results;
      next = await request.data.next;

      // Iterate over fetched data and add to resultsArray
      for (let result of results) {
        resultsArray.push(result);
      }

      // If next value is null, increment counter to end while loop
      if (next === null) {
        counter++;
      }
    }
  }

  dispatch({
    type: FETCH_STARSHIPS,
    payload: resultsArray
  });
};

export function fetchStarship(id) {
  let request = axios.get(`${ROOT_URL}/starships/${id}`);

  return {
    type: FETCH_STARSHIP,
    payload: request
  };
}

export const fetchSpecies = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/species/`);

  // Assign results to array to allow further results to be concatenated later
  let resultsArray = response.data.results;

  // Assign "next" api page to variable to allow next api call
  let next = await response.data.next;

  // Create index to allow while loop
  let counter = 0;

  if (next !== null) {
    while (counter < 1) {
      // Call next api page
      const request = await axios.get(next);

      // Assign results to variable and iterate over it, adding results to original resultsArray
      let results = await request.data.results;
      next = await request.data.next;

      // Iterate over fetched data and add to resultsArray
      for (let result of results) {
        resultsArray.push(result);
      }

      // If next value is null, increment counter to end while loop
      if (next === null) {
        counter++;
      }
    }
  }

  dispatch({
    type: FETCH_SPECIES,
    payload: resultsArray
  });
};

export function fetchSpecie(id) {
  let request = axios.get(`${ROOT_URL}/species/${id}`);

  return {
    type: FETCH_SPECIE,
    payload: request
  };
}
