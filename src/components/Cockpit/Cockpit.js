import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  // This will run for every render cycle, including the first one
  // I can also make multiple useEffect calls if need be
  useEffect(() => {
    console.log(`[Cockpit.js] useEffect`);
    // ? Can do HTTP requests inside here as well
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    //If I want this to run on the first render ONLY, I  would pass an empty array here.  If I want it to run
    // once something updates, I pass in those values to the array.
  }, []);

  const assignedClasses = [];
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
      <button onClick={props.togglePersonsDiv} key={1}>
        Show/Hide Persons
      </button>
      <button onClick={props.restorePersons} key={2}>
        Restore Persons
      </button>
    </div>
  );
};

export default cockpit;
