import React from 'react';
import BuildingLIst from './BuildingList';
// import NewBuilding from './NewBuilding';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.addBuilding = this.addBuilding.bind(this);
  }

  render () {
    return (
      <div className="col-sm-6 col-md-6">
        {/* <NewBuilding
          addBuilding={this.addBuilding}
        /> */}
        <BuildingLIst
        />
      </div >
    );
  }

  addBuilding () {
    const newBuilding = Object.assign({}, this.state, {body: ''});
    this.setState({ items: newBuilding });
  }
}

export default App;