import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchFilms } from "../../actions";

import Card from "../Card/Card";
import "./Films.css";
import SearchBox from "../Search/SearchBox";
import Error from "../Error/Error";

class FilmList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  componentDidMount() {
    if (this.props.films.length === 0 && !this.props.error.film.message) {
      this.props.fetchFilms();
    }
  }

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  renderFilms() {
    const { searchTerm } = this.state;
    const { error } = this.props;

    const filteredFilms = this.props.films.filter(film => {
      return film.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (error.film.message) return <Error message={error.film.message} redirect="films" />;

    return (
      <div>
        <SearchBox search={"films"} onSearchChange={this.onSearchChange} />
        <div className="tc white flex justify-around films">
          {
            filteredFilms.map((film, i) => <Card item={film} linkPath="films" key={film.name} />)
          }
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderFilms()}</div>;
  }
}

function mapStateToProps(state) {
  return { films: state.films, error: state.error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFilms }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmList);
