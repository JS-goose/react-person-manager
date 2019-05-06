import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 123, name: 'Jonathan', age: 33 },
      { id: 124, name: 'Stephanie', age: 29 },
      { id: 125, name: 'Travis', age: 38 },
    ],
  };

  handleInputName = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const updatedPersons = [...this.state.persons];
    updatedPersons[personIndex] = person;
    this.setState({
      persons: updatedPersons,
      showPersons: true,
    });
  };

  deletePersonHandler = (personIndex) => {
    const personList = [...this.state.persons];
    personList.splice(personIndex, 1);
    this.setState({ persons: personList });
  };

  togglePersonsDiv = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  restorePersons = () => {
    window.location = window.location;
  };

  render() {
    const buttonStyle = {
      padding: '5px',
      borderRadius: '3px',
      border: '1px solid #eee',
      boxShadow: '1px 1px 3px #636363',
      cursor: 'pointer',
      marginRight: 8,
      fontWeight: 900,
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              deletePerson={() => this.deletePersonHandler(index)}
              handleInputName={(event) => this.handleInputName(event, person.id)}
            />
          ))}
        </div>
      );
      buttonStyle.backgroundColor = 'white';
      buttonStyle.color = 'coral';
      
    } else {
      const personStyle = {
        paddingTop: 5,
        fontWeight: 900,
        fontSize: '1.3rem',
        color: 'orangered',
      };
      persons = <div style={personStyle}>Persons div is hidden</div>;
    }
    const assignedClasses = [];
    
    if (this.state.persons.length < 1) {
      assignedClasses.push(classes.strike);
    }

    if (this.state.persons.length < 2) {
      assignedClasses.push(classes.yellow);
    }

    if (this.state.persons.length < 3) {
      document.querySelector('h1').innerHTML = '😭 React Course 😨'
    }

  
    return (
      
      <div className={classes.App}>
        <h1 className={assignedClasses.join(' ')}>React Course :)</h1>
        <button style={buttonStyle} onClick={this.togglePersonsDiv} key={1}>
          Show/Hide Persons
        </button>
        <button style={buttonStyle} onClick={this.restorePersons} key={2}>
          Restore Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
