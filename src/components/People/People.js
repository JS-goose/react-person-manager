import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log(`[People.js] getDerivedStateFromProps`);
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`[People.js] shouldComponentUpdate`);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`[People.js] getSnapshotBeforeUpdate`);
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`[People.js] componentDidUpdate`);
    console.log(snapshot);
  }

  render() {
    console.log(`[People.js] rendering...`);
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          deletePerson={() => this.props.deletePersonHandler(index)}
          handleInputName={(event) => this.props.handleInputName(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
