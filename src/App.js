import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Testing React Lawl</h1>
        <Person name={'Jonathan'} age={33}/>
        <Person name={'Stephanie'} age={29}/>
        <Person name={'Travis'} age={38}/>
      </div>
    );
  }
}

export default App;
