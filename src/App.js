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

  handleInputName = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 33 },
        { name: event.target.value, age: 29 },
        { name: event.target.value, age: 38 },
      ],
      showPersons: true,
    });
  };

  deletePersonHandler = (personIndex) => {
    const personList = this.state.persons;
    personList.splice(personIndex, 1);
    this.setState({ persons: personList });
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
          {this.state.persons.map((person, index) => (
            <Person
              name={person.name}
              age={person.age}
              // click={() => this.deletePersonHandler(index)}
              handleInputName={this.handleInputName}
            />
          ))}
        </div>
      );
    } else {
      const personStyle = {
        paddingTop: 5,
        fontWeight: 900,
        fontSize: '1.3rem',
        color: 'orangered',
      };
      persons = <div style={personStyle}>Persons div is hidden</div>;
    }
    return (
      <div className="App">
        <h1>React Course :)</h1>
        <button style={buttonStyle} onClick={this.togglePersonsDiv}>
          Show/Hide Persons
        </button>
        <button style={buttonStyle} onClick={this.restorePersons}>
          Restore Persons
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
  marginRight: 8,
};

export default App;
