import React from 'react';
import PropertyList from './PropertiesList';
import NewProperty from './NewProperty';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.addProperty = this.addProperty.bind(this);
  }
  render() {
    return (
      <div className="col-sm-6 col-md-6">
        {/* <NewProperty
          addProperty={this.addProperty}
        /> */}
        <PropertyList
        />
      </div >
    );
  }

  addProperty() {
    const newProperty = Object.assign({}, this.state, {
      [newPropertyId]: {
        body: ''
      }
    })
    this.setState({ items: newProperty });
  }
}


export default App;