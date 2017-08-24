import React from 'react';
// import PropTypes from 'prop-types';
import '../css/bulma.css';
import axios from 'axios';
import map from 'lodash/map';
import BuildingCard from './BuildingCard';
import NewBuilding from './NewBuilding';
import {ROUTE} from '../../config';

// const API_URL = 'http://localhost:8080';

class BuildingList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      buildings: []
    };
  }

  componentDidMount () {
    axios.get(`${ROUTE}/buildings`)
      .then((res) => {

        let buildings = res.data;
        this.setState({
          buildings: buildings
        });
      })
      .catch(console.log);
  }

  render () {
    const buildings = this.state.buildings;
    return (
      <div>
        <h2>Current Buildings</h2>
        {
          buildings.length === 0
            ? <p>Loading...</p> :
            map(buildings, ((building, i) => (
              <BuildingCard
                key={i}
                building={building}
              />
            )))
        }
        <NewBuilding />
      </div>
    );
  }
}

export default BuildingList;
