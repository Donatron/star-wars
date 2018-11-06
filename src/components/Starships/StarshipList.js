import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchStarships } from '../../actions';
import { getIndex } from '../../helpers';

import Starship from './Starship';
import Loader from '../Loader/loader';
import './Starships.css';

class StarshipList extends Component {
  componentDidMount() {
    this.props.fetchStarships();
  }

  render() {
    if(!this.props.starships) {

      return (
        <Loader />
      )
    } else {
        return (
          <div className="tc white flex justify-around starships">
            {
              this.props.starships.map((starship, i) => {
                const id = getIndex(starship.url);
                console.log(`Name: ${starship.name}. ID: ${id}`);

                return (
                  <Link to={`/starships/${id}`} key={id}>
                    <Starship
                      key={starship.name}
                      id={id}
                      name={starship.name}
                    />
                  </Link>
                )
              })
            }

          </div>
        )
    }
  }
}

function mapStateToProps(state) {
  return { starships: state.starships.results }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStarships }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StarshipList);
