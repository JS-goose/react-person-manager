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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => (
            <Person name={person.name} age={person.age}/>
          ))}
        </div>
      );
    } else {
      const style = {
        paddingTop: 5,
        fontWeight: 900,
        fontSize: '1.3rem',
        color: 'orangered',
      };
      persons = <div style={style}>Persons div is hidden</div>;
    }
    return (
      <div className="App">
        <h1>React Course :)</h1>
        <button style={buttonStyle} onClick={this.togglePersonsDiv}>
          Show/Hide Persons
        </button>
        {persons}
      </div>
    );
  }
}

const buttonStyle = {
  padding: '5px',
  borderRadius: '3px',
  border: '1px solid #ccc',
  boxShadow: '1px 1px 3px lightblue',
  cursor: 'pointer',
};

export default App;
