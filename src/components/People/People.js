import React from 'react';
import Person from './Person/Person';

const people = (props) =>
  props.persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        deletePerson={() => props.deletePersonHandler(index)}
        handleInputName={(event) => props.handleInputName(event, person.id)}
      />
    );
  });

export default people;