import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSpecies } from '../../actions';
import { getIndex } from '../../helpers';

import Species from './Species';
import Loader from '../Loader/loader';
import './Species.css'

class SpeciesList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpecies();
  }

  renderSpecies() {
    if (!this.props.species) {
      return (
        <Loader />
      )
    } else {
      return (
        <div className="tc white flex justify-around species">
          {
            this.props.species.map((specie, i) => {
              let index = getIndex(specie.url);

              return (
                  <Link to={`/species/${index}`} key={index}>
                    <Species
                      key={specie.name}
                      id={index}
                      name={specie.name}/>
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
      <div>{this.renderSpecies()}</div>
    )
  }
}

function mapStateToProps(state) {
  return { species: state.species.results }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSpecies }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SpeciesList);
