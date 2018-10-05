import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSpecie } from '../../actions';
import { getIndex } from '../../helpers';

import Loader from '../Loader/loader';
import Species from './Species';
import Planet from '../Planets/Planet';
import Character from '../Characters/Character';
import Film from '../Films/Film';

class SpeciesDetail extends Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.fetchSpecie(id);
  }

  renderSpecie() {
    const { specie } = this.props;
    const { id } = this.props.match.params;

    if(!this.props.specie) {
      return (
        <Loader />
      )
    } else {
      return (
        <div>
          <div className="w-100 text-center">
            <h2>{specie.name}</h2>
          </div>
          <div className="tc white flex justify-around">
            <Species
              name=""
              id={id}
              key={id}/>
            <div>
              <p>Classification: {specie.classification}</p>
              <p>Designation: {specie.designation}</p>
              <p>Average Height: {specie.avaergae_height}cm</p>
              <p>Skin Colours: {specie.skin_colors}</p>
              <p>Hair Colours: {specie.hair_colors}</p>
              <p>Eye Colours: {specie.eye_colors}</p>
              <p>Average Lifespan: {specie.average_lifespan}</p>
              <p>Language: {specie.language}</p>
              <p>Home World: {specie.homeworld}</p>
            </div>
          </div>
          <div>
            <h3>People</h3>
            {
              specie.people.map((person, i) => {
                let id = getIndex(person);

                return (
                  <Link to={`/characters/${id}`} key={id}>
                    <Character
                      name=""
                      id={id}
                      key={id}/>
                  </Link>
                )
              })
            }
          </div>
          <div>
            <h3>Appears In Films</h3>
              {
                specie.films.map((film, i) => {
                  let id = getIndex(film);

                  return (
                    <Link to={`/films/${id}`} key={id}>
                      <Film
                        name=""
                        id={id}
                        key={id}/>
                    </Link>
                  )
                })
              }
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>{this.renderSpecie()}</div>
    )
  }
}

function mapStateToProps({ species }, ownProps) {
  return { specie: species.specie }
}

export default connect(mapStateToProps, { fetchSpecie })(SpeciesDetail);
