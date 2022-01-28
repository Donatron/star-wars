import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchVehicles } from "../../actions";

import Card from "../Card/Card";
import "./Vehicles.css";
import SearchBox from "../Search/SearchBox";

class VehicleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  componentDidMount() {
    if (this.props.vehicles.length === 0) {
      this.props.fetchVehicles();
    }
  }

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  renderVehicles() {
    const { searchTerm } = this.state;
    const filteredVehicles = this.props.vehicles.filter(vehicle => {
      return vehicle.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div className="">
        <SearchBox search={"vehicles"} onSearchChange={this.onSearchChange} />
        <div className="tc white flex justify-around vehicles">
          {
            filteredVehicles.map((vehicle, i) => <Card item={vehicle} linkPath="vehicles" key={vehicle.name} />)
          }
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderVehicles()}</div>;
  }
}

function mapStateToProps(state) {
  return { vehicles: state.vehicles };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVehicles }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleList);
