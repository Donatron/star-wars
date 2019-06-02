import axios from "axios";

export const FETCH_PEOPLE = "FETCH_PEOPLE";
export const FETCH_PERSON = "FETCH_PERSON";
export const CLEAR_PERSON = "CLEAR_PERSON";
export const FETCH_FILMS = "FETCH_FILMS";
export const FETCH_FILM = "FETCH_FILM";
export const CLEAR_FILM = "CLEAR_FILM";
export const FETCH_PLANETS = "FETCH_PLANETS";
export const FETCH_PLANET = "FETCH_PLANET";
export const CLEAR_PLANET = "CLEAR_PLANET";
export const FETCH_VEHICLES = "FETCH_VEHICLES";
export const FETCH_VEHICLE = "FETCH_VEHICLE";
export const CLEAR_VEHICLE = "CLEAR_VEHICLE";
export const FETCH_STARSHIPS = "FETCH_STARSHIPS";
export const FETCH_STARSHIP = "FETCH_STARSHIP";
export const CLEAR_STARSHIP = "CLEAR_STARSHIP";
export const FETCH_SPECIES = "FETCH_SPECIES";
export const FETCH_SPECIE = "FETCH_SPECIE";
export const CLEAR_SPECIE = "CLEAR_SPECIE";
export const DATA_LOADING = "DATA_LOADING";

const ROOT_URL = "https://swapi.co/api";

export const fetchPeople = () => async dispatch => {
  dispatch(setDataLoading());
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

  dispatch(setDataLoading());
};

export const fetchPerson = id => async dispatch => {
  const request = await axios.get(`${ROOT_URL}/people/${id}`);

  dispatch({
    type: FETCH_PERSON,
    payload: request
  });
};

export const clearSelectedPerson = () => {
  return {
    type: CLEAR_PERSON
  };
};

export const fetchFilms = () => async dispatch => {
  dispatch(setDataLoading());

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

  dispatch(setDataLoading());
};

export const fetchFilm = id => async dispatch => {
  const request = await axios.get(`${ROOT_URL}/films/${id}`);

  dispatch({
    type: FETCH_FILM,
    payload: request
  });
};

export const clearSelectedFilm = () => {
  return {
    type: CLEAR_FILM
  };
};

export const fetchPlanets = () => async dispatch => {
  dispatch(setDataLoading());

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

  dispatch(setDataLoading());
};

export const fetchPlanet = id => async dispatch => {
  const request = await axios.get(`${ROOT_URL}/planets/${id}`);

  dispatch({
    type: FETCH_PLANET,
    payload: request
  });
};

export const clearSelectedPlanet = () => {
  return {
    type: CLEAR_PLANET
  };
};

export const fetchVehicles = () => async dispatch => {
  dispatch(setDataLoading());

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

  dispatch(setDataLoading());
};

export const fetchVehicle = id => async dispatch => {
  let request = await axios.get(`${ROOT_URL}/vehicles/${id}`);

  dispatch({
    type: FETCH_VEHICLE,
    payload: request
  });
};

export const clearSelectedVehicle = () => {
  return {
    type: CLEAR_VEHICLE
  };
};

export const fetchStarships = () => async dispatch => {
  dispatch(setDataLoading());

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

  dispatch(setDataLoading());
};

export const fetchStarship = id => async dispatch => {
  let request = await axios.get(`${ROOT_URL}/starships/${id}`);

  dispatch({
    type: FETCH_STARSHIP,
    payload: request
  });
};

export const clearSelectedStarship = () => {
  return {
    type: CLEAR_STARSHIP
  };
};

export const fetchSpecies = () => async dispatch => {
  dispatch(setDataLoading());

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
  dispatch(setDataLoading());
};

export const fetchSpecie = id => async dispatch => {
  let request = await axios.get(`${ROOT_URL}/species/${id}`);

  dispatch({
    type: FETCH_SPECIE,
    payload: request
  });
};

export const clearSelectedSpecie = () => {
  return {
    type: CLEAR_SPECIE
  };
};

export const setDataLoading = () => {
  return {
    type: DATA_LOADING
  };
};
