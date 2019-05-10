import React from 'react';
import classes from './Cockpit.css'
const assignedClasses = [];

const cockpit = (props) => {
  return (
    <div>
      <h1 className={assignedClasses.join(' ')}>React Course :)</h1>
      <button className={classes.buttonStyle} onClick={props.togglePersonsDiv} key={1}>
        Show/Hide Persons
      </button>
      <button className={classes.buttonStyle} onClick={props.restorePersons} key={2}>
        Restore Persons
      </button>
    </div>
  );
};

export default cockpit;