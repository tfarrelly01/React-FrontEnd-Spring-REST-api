import React, {Component} from 'react';
import axios from 'axios';
import _ from 'underscore';

const API_URL = 'http://localhost:8080';

function validate (newState) {
  const errors = {};

  if (newState.buildingName.touched) {
    if (!newState.buildingName.value) errors.buildingName = 'Please enter the name of the building.';
    else errors.buildingName = null;
  }

  if (newState.buildingType.touched) {
    if (!newState.buildingType.value) errors.buildingType = 'Please enter the type of building.';
    else if (newState.buildingType.value.length > 40) errors.buildingType = 'Building types must be under 40 characters';
    else errors.buildingType = null;
  }

  if (newState.noOfRooms.touched) {
    if (!newState.noOfRooms.value) errors.noOfRooms = 'Please enter the number of rooms the building has.';
    else if (newState.noOfRooms.value <= 0) errors.noOfRooms = 'Number of rooms must be greater than 0';
    else errors.noOfRooms = null;
  }

  if (newState.noOfParkingSpaces.touched) {
    if (!newState.noOfParkingSpaces.value) errors.noOfParkingSpaces = 'Please enter the number of parking spaces the building has.';
    else if (newState.noOfParkingSpaces.value < 0) errors.noOfParkingSpaces = 'Number of parking spaces must be at least zero';
    else errors.noOfParkingSpaces = null;
  }
  return errors;
}

class NewBuilding extends Component {
    constructor (props) {
        super(props);
        this.state = {
            buildingName: {
                value: '',
                touched: false
            },
            buildingType: {
                value: '',
                touched: false
            },
            noOfRooms: {
                value: '',
                touched: false
            },
            noOfParkingSpaces: {
                value: '',
                touched: false
            },
            errors: {
                buildingName: null,
                buildingType: null,
                noOfRooms: null,
                noOfParkingSpaces: null
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label htmlFor="name-input">Name:</label>
                        <input type="text" id="name-input" onChange={this.handleChange.bind(null, 'buildingName')} />
                        <p>{this.state.errors.buildingName}</p>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="type-input">Type:</label>
                        <input type="text" id="type-input" onChange={this.handleChange.bind(null, 'buildingType')} />
                        <p>{this.state.errors.buildingType}</p>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="noOfRooms-input">Number of rooms:</label>
                        <input type="text" id="noOfRooms-input" onChange={this.handleChange.bind(null, 'noOfRooms')} />
                        <p>{this.state.errors.noOfRooms}</p>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="noOfParkingSpaces-input">Number of Parking Spaces:</label>
                        <input type="text" id="noOfParkingSpaces-input" onChange={this.handleChange.bind(null, 'noOfParkingSpaces')} />
                        <p>{this.state.errors.noOfParkingSpaces}</p>
                    </fieldset>

                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }

    handleChange (field, e) {
        // get new State
        const newState = Object.assign({}, this.state, {
            [field]: {
            value: e.target.value,
            touched: true
            }
        });
        const errors = validate (newState);

        this.setState(Object.assign(newState, {errors}));
    }

    handleSubmit (e) {
        e.preventDefault();
        // Check if there are no errors
        if (_.every(this.state.errors, field => field === null)) {

            const newBuilding = {
                buildingName: this.state.buildingName.value,
                buildingType: this.state.buildingType.value,
                noOfRooms: +this.state.noOfRooms.value,
                noOfParkingSpaces: +this.state.noOfParkingSpaces.value
            };
            axios.post(`${API_URL}/buildings/-1`, newBuilding)
            .then((res) => {

                let buildings = res.data;
                this.setState({
                buildings: buildings
                });
            })
//           .catch(console.log);
            .catch((err) => {
                err.response.data.errors.forEach((errorMsg) => {
                    console.log(errorMsg.defaultMessage);
                });
            });
        } else {
            alert('Form is not valid!');
        }

        // Reset the state
        this.setState({
        buildingName: {
            value: '',
            touched: false
        },
        buildingType: {
            value: '',
            touched: false
        },
        noOfRooms: {
            value: '',
            touched: false
        },
        noOfParkingSpaces: {
            name: null,
            comment: null
        }
        });
    }
 }

 export default NewBuilding;
