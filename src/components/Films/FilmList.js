import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilms } from '../../actions';

import Film from './Film';
import Loader from '../Loader/loader';
import './Films.css'

class FilmList extends Component {
  constructor(props) {
    super(props)
  }

  renderFilms() {
    if (!this.props.films) {
      return (
      <Loader />
      )
    } else {
      return (
        <div className="tc white flex justify-around films">
          {
            this.props.films.map((film, i) => {
              return (
                  <Link to={`/films/${i+1}`} key={i}>
                    <Film
                      key={film.name}
                      id={i+1}
                      name={film.name}/>
                  </Link>
              )
            })
          }
        </div>
      )
    }
  }

  render() {
    return (
      <div>{this.renderFilms()}</div>
    )
  }

  componentDidMount() {
    this.props.fetchFilms();
  }
}

function mapStateToProps(state) {
  return { films: state.films.results }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFilms }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
