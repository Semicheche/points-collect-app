import React, { Component } from 'react';
import PointsList from './components/PointsList'
import { Jumbotron } from 'react-bootstrap'

class App extends Component {
  render(){

    return (
      <div className='App'>
            <Jumbotron><h1>LIST OF POINTS</h1></Jumbotron>
            <PointsList newList={true} />
      </div>
    );
  }
}
export default App;
