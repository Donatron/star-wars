import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchStarships } from "../../actions";
import { getIndex } from "../../helpers";

import Starship from "./Starship";
import "./Starships.css";
import SearchBox from "../Search/SearchBox";

class StarshipList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  componentDidMount() {
    if (this.props.starships.length === 0) {
      this.props.fetchStarships();
    }
  }

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm } = this.state;
    const filteredStarships = this.props.starships.filter(starship => {
      return starship.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div className="">
        <SearchBox search={"starships"} onSearchChange={this.onSearchChange} />
        <div className="tc white flex justify-around starships">
          {filteredStarships.map((starship, i) => {
            const id = getIndex(starship.url);
            console.log(`Name: ${starship.name}. ID: ${id}`);

            return (
              <Link to={`/starships/${id}`} key={id}>
                <Starship key={starship.name} id={id} name={starship.name} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { starships: state.starships };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStarships }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarshipList);
