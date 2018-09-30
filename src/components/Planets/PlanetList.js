import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlanets } from '../../actions/index';

import Planet from './Planet';
import './Planets.css'
import Loader from '../Loader/loader';

class PlanetList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPlanets();
  }

  renderPlanets() {
    if (!this.props.planets) {
      return (
        <div>
          <Loader />
        </div>
      )
    } else {
        return (
          <div className="tc white flex justify-around planets">
            {
              this.props.planets.map((planet, i) => {
                return (
                    <Link to={`/planets/${i+1}`} key={i}>
                      <Planet
                        key={planet.name}
                        id={i+1}
                        name={planet.name}/>
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
      <div>{this.renderPlanets()}</div>
    )
  }
}

function mapStateToProps(state) {
  return { planets: state.planets.results }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPlanets}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetList);
