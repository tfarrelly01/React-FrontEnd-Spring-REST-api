import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import PropertiesCard from './PropertiesCard'
import '../css/bulma.css';


import axios from 'axios';

const API_URL = 'http://localhost:9092';

class PropertiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: []
    };
  }

  componentDidMount() {
    axios.get(`${API_URL}/properties`)
      .then((res) => {

        let properties = res.data;
        this.setState({
          properties: properties
        });
      })
      .catch(console.log);
  }

  render() {
    const properties = this.state.properties;
    return (
      <div>
        <h2>
          Current Properties
          </h2>
        {
          properties.length === 0
            ? <p>Loading...</p> :
            map(properties, ((property, i) => (
              <PropertiesCard
                key={i}
                property={property}
              />
            )))
        }
      </div>
    );
  }
}





export default PropertiesList;
