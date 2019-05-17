import React, { Component } from 'react';
import classes from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    persons: [
      { id: 123, name: 'Jonathan', age: 33 },
      { id: 124, name: 'Stephanie', age: 29 },
      { id: 125, name: 'Travis', age: 38 },
    ],
    users: [],
    showCockpit: true,
    changeCounter: 0,
  };

  componentWillMount = async () => {
    console.log(`[App.js] componentwillMount`);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    this.setState({ users: data });
  };

  componentDidMount() {
    console.log(`[App.js] componentDidMount`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`[App.js] shouldComponentUpdate`);
    return true;
  }

  componentDidUpdate() {
    console.log(`[App.js] componentDidUpdate`);
  }

  handleInputName = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const updatedPersons = [...this.state.persons];
    updatedPersons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
      persons: updatedPersons,
      showPersons: true,
      changeCounter: prevState.changeCounter + 1,
      }
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
        <People
          persons={this.state.persons}
          deletePersonHandler={this.deletePersonHandler}
          handleInputName={this.handleInputName}
        />
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
      <button onClick = {()=> {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        {this.state.showCockpit ? 
        <Cockpit
          persons={this.state.persons.length}
          togglePersonsDiv={this.togglePersonsDiv}
          restorePersons={this.restorePersons}
        /> : null }
      
        {persons}
      </div>
    );
  }
}

export default App;
