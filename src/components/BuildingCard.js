import React from 'react';
// import PropTypes from 'prop-types';
import '../css/bulma.css';

const BuildingCard = function (props) {
  const building = props.building;

  return (
    <div className="columns">
      <div className="column is-half">
        <div className="notification is-info">
          <span>{building.buildingName} :</span>
          <span>{building.buildingType} :</span>
          <span>{building.noOfRooms} :</span>
          <span>{building.noOfParkingSpaces}</span>
        </div>
      </div>
    </div>
  );
};

export default BuildingCard;
