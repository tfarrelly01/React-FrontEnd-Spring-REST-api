// import React, { Component, PropTypes } from 'react';
// import PropTypes from 'prop-types';

// const API_URL = 'http://localhost:9092'

// class NewProperty extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: ''
//     };
//     this.propertiesRef = axios.post('/properties');
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.propertiesRef.push({ name: this.state.name });
//   }

//   render() {
//     const { name } = this.state;

//     return (
//       <form
//         className="NewProperties"
//       >
//         <input
//           type="text"
//           value={name}
//           placeholder="type of property"
//           onChange={(event) => this.setState({ name: event.target.value })}
//         />
//         <button
//           onClick={this.handleSubmit}
//           disabled={!name}
//         >
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

// NewRestaurant.propTypes = {
//   restaurantsRef: PropTypes.object
// };

// export default NewProperty;
