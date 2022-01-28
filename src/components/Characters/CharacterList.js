import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPeople } from "../../actions/index";
import { getIndex } from "../../helpers";

import Character from "./Character";
import "../Characters/Character.css";
import SearchBox from "../Search/SearchBox";
import Error from "../Error/Error";

class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  componentDidMount() {
    if (this.props.people.length === 0 && !this.props.error.people.message) {
      this.props.fetchPeople();
    }
  }

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  renderPeople() {
    const { searchTerm } = this.state;
    const { error } = this.props;
    const filteredPeople = this.props.people.filter(person => {
      return person.name.toLowerCase().includes(searchTerm.toLowerCase());
    });


    if (error.people.message) return <Error message={error.people.message} redirect="characters" />
    return (
      <div className="">
        <SearchBox search={"characters"} onSearchChange={this.onSearchChange} />
        <div className="tc white flex justify-around characters">
          {filteredPeople.map((person, i) => {
            let id = getIndex(person.url);
            return (
              <Link to={`/characters/${id}`} key={id}>
                <Character key={person.name} id={id} name={person.name} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderPeople()}</div>;
  }
}

function mapStateToProps(state) {
  return { people: state.people, error: state.error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPeople }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
