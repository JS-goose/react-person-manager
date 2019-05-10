import React from 'react';
import classes from './Cockpit.css';
const assignedClasses = [];

const cockpit = (props) => {
  if (props.persons.length < 1) {
    assignedClasses.push(classes.strike);
  }

  if (props.persons.length < 2) {
    assignedClasses.push(classes.yellow);
  }

  if (props.persons.length < 3) {
    document.querySelector('h1').innerHTML = '😭 React Course 😨';
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={assignedClasses.join(' ')}>React Course :)</h1>
      <button  onClick={props.togglePersonsDiv} key={1}>
        Show/Hide Persons
      </button>
      <button  onClick={props.restorePersons} key={2}>
        Restore Persons
      </button>
    </div>
  );
};

export default cockpit;
