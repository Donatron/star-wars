import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSpecies } from "../../actions";

import Card from "../Card/Card";
import "./Species.css";
import SearchBox from "../Search/SearchBox";

class SpeciesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  componentDidMount() {
    if (this.props.species.length === 0) {
      this.props.fetchSpecies();
    }
  }

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  renderSpecies() {
    const { searchTerm } = this.state;
    const filteredSpecies = this.props.species.filter(specie => {
      return specie.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div className="">
        <SearchBox search={"species"} onSearchChange={this.onSearchChange} />
        <div className="tc white flex justify-around species">
          {
            filteredSpecies.map((specie, i) => <Card item={specie} linkPath="species" key={specie.name} />)
          }
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderSpecies()}</div>;
  }
}

function mapStateToProps(state) {
  return { species: state.species };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSpecies }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeciesList);
