import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPeople } from "../../actions/index";
import { getIndex } from "../../helpers";

import Character from "./Character";
import "../Characters/Character.css";
import Loader from "../Loader/loader";
import SearchBox from "../Search/SearchBox";

class CharacterList extends Component {
  renderPeople() {
    if (this.props.people.length === 0) {
      return (
        <div>
          <Loader />
        </div>
      );
    } else {
      return (
        <div className="">
          <div className="">
            <SearchBox search={"characters"} />
          </div>
          <div className="tc white flex justify-around characters">
            {this.props.people.map((person, i) => {
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
  }

  componentDidMount() {
    if (this.props.people.length === 0) {
      this.props.fetchPeople();
    }
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
