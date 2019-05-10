import React, { Component } from 'react';
import classes from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <People
            persons={this.state.persons}
            deletePersonHandler={this.deletePersonHandler}
            handleInputName={this.handleInputName}
          />
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
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          togglePersonsDiv={this.togglePersonsDiv}
          restorePersons={this.restorePersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
