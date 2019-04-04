import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPeople } from "../../actions/index";
import { getIndex } from "../../helpers";

import Character from "./Character";
import "../Characters/Character.css";
import SearchBox from "../Search/SearchBox";

class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  componentDidMount() {
    if (this.props.people.length === 0) {
      this.props.fetchPeople();
    }
  }

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  renderPeople() {
    const { searchTerm } = this.state;
    const filteredPeople = this.props.people.filter(person => {
      return person.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div className="">
        <div className="">
          <SearchBox
            search={"characters"}
            onSearchChange={this.onSearchChange}
          />
        </div>
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
  return { people: state.people };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPeople }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
