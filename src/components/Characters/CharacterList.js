import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPeople } from '../../actions/index';
import { getIndex } from '../../helpers';

import Character from './Character';
import '../Characters/Character.css';
import Loader from '../Loader/loader';

class CharacterList extends Component {
  constructor(props) {
    super(props);
  }

  renderPeople() {
    if(!this.props.people) {
      return (
        <div>
          <Loader />
        </div>
      );
    } else {
      return (
        <div className="tc white flex justify-around characters">
          {
            this.props.people.map((person, i) => {
              let id = getIndex(person.url);
              return (
                  <Link to={`/characters/${id}`} key={id}>
                    <Character
                      key={person.name}
                      id={id}
                      name={person.name}/>
                  </Link>
              )
            })
          }
        </div>
      )
    }
  }

  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    return (
      <div>{this.renderPeople()}</div>
    )
  }

}

function mapStateToProps(state) {
  return { people: state.people.results }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPeople }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
