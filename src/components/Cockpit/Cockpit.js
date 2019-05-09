import React from 'react';
const assignedClasses = [];

const cockpit = (props) => {
  return (
    <div>
      <h1 className={assignedClasses.join(' ')}>React Course :)</h1>
      <button className={classes.buttonStyle} onClick={this.togglePersonsDiv} key={1}>
        Show/Hide Persons
      </button>
      <button className={classes.buttonStyle} onClick={this.restorePersons} key={2}>
        Restore Persons
      </button>
    </div>
  );
};

export default cockpit;