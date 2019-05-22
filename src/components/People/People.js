import React, { Component } from 'react';
import Person from './Person/Person';

class People extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log(`[People.js] getDerivedStateFromProps`);
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(`[People.js] shouldComponentUpdate`);
  //   if (
  //     // This checks to see if all properties passed to this component have changed and if so it updates if not no updated occurs
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.deletePerson !== this.props.deletePerson ||
  //     nextProps.handleInputName !== this.props.handleInputName
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`[People.js] getSnapshotBeforeUpdate`);
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`[People.js] componentDidUpdate`);
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log(`[People.js] componentWillUnmount`);
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

export default People;
