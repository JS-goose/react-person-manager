import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render() {
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
