import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchVehicles } from "../../actions";
import { getIndex } from "../../helpers";

import Vehicle from "./Vehicle";
import Loader from "../Loader/loader";
import "./Vehicles.css";
// import SearchBox from "../Search/SearchBox";

class VehicleList extends Component {
  componentDidMount() {
    if (this.props.vehicles.length === 0) {
      this.props.fetchVehicles();
    }
  }

  renderVehicles() {
    if (this.props.vehicles.length === 0) {
      return <Loader />;
    } else {
      return (
        <div className="">
          {/* <SearchBox search={"vehicles"} /> */}
          <div className="tc white flex justify-around vehicles">
            {this.props.vehicles.map((vehicle, i) => {
              let id = getIndex(vehicle.url);

              return (
                <Link to={`/vehicles/${id}`} key={id}>
                  <Vehicle key={vehicle.name} id={id} name={vehicle.name} />
                </Link>
              );
            })}
          </div>
        </div>
      );
    }
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
