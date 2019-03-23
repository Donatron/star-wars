import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchFilms } from "../../actions";
import { getIndex } from "../../helpers";

import Film from "./Film";
import Loader from "../Loader/loader";
import "./Films.css";

class FilmList extends Component {
  constructor(props) {
    super(props);
  }

  renderFilms() {
    if (this.props.films.length === 0) {
      return <Loader />;
    } else {
      return (
        <div className="tc white flex justify-around films">
          {this.props.films.map((film, i) => {
            let id = getIndex(film.url);

            return (
              <Link to={`/films/${id}`} key={id}>
                <Film key={film.name} id={id} name={film.name} />
              </Link>
            );
          })}
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderFilms()}</div>;
  }

  componentDidMount() {
    if (this.props.films.length === 0) {
      this.props.fetchFilms();
    }
  }
}

function mapStateToProps(state) {
  return { films: state.films };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFilms }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmList);
