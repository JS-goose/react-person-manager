import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jonathan', age: 33 },
      { name: 'Stephanie', age: 29 },
      { name: 'Travis', age: 38 },
    ],
  };

  nameSwitchHandler = (newName, newNameTwo, newNameThree) => {
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: newNameTwo, age: 29 },
        { name: newNameThree, age: 38 },
      ],
    });
  };

  handleInputName = (event) => {
    this.setState({
      persons: [
        { name: 'Jonathan', age: 33 },
        { name: 'Stephanie', age: 29 },
        { name: event.target.value, age: 38 },
      ],
      showPersons: false,
    });
  };

  togglePersonsDiv = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Course :)</h1>
        <button style={style} onClick={this.togglePersonsDiv}>
          Show/Hide Persons
        </button>
        {this.state.showPersons ? (
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
            <Person
              nameSwitchHandler={this.nameSwitchHandler.bind(
                this,
                '**JONATHAN**',
                '***STEPHANIE***',
                '<---TRAVIS--->'
              )}
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              handleInputName={this.handleInputName}
            >
              {/*Anything placed between component tags can be accessed via props.children*/}
              My hobbies: Gaming
            </Person>
          </div>
        ) : (
          <div>Persons div is hidden</div>
        )}
      </div>
    );
  }
}

const style = {
  padding: '5px',
  borderRadius: '3px',
  border: '1px solid #ccc',
  boxShadow: '1px 1px 3px lightblue',
  cursor: 'pointer',
};

export default App;
