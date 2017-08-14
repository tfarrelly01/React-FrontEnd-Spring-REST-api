import React from 'react';
import PropTypes from 'prop-types';
import '../css/bulma.css';

const PropertiesCard = function (props) {
  console.log(props.property, 'props')
  const property = props.property
  return (
    <div className="columns">
      <div className="column is-half">
        <p className="notification is-info">
          <p className=''>{property.propertyId}</p>
          <p className=''>{property.propertyType}</p>
          <p className=''>{property.numBedrooms}</p>
          <p className=''>{property.location}</p>
        </p>
      </div>
    </div>
  );
};


export default PropertiesCard;
