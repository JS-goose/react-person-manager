import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const buttonRef = useRef(null);
  const authContext = useContext(AuthContext);

  // This will run for every render cycle, including the first one
  // I can also make multiple useEffect calls if need be
  useEffect(() => {
    console.log(`[Cockpit.js] useEffect`);
    buttonRef.current.focus();
    // ? Can do HTTP requests inside here as well
    //   setTimeout(() => {
    //     alert('Saved data to cloud!');
    //   }, 1000);
    //* This returned function will run before the main useEffect function but after the first render cycle
    //   return () => {
    //     console.log(`[Cockpit.js] cleanup in useEffect..`);
    //   };
    //* If I want this to run on the first render ONLY, I  would pass an empty array here.  If I want it to run
    //* once something updates, I pass in those values to the array and this will run only when those are updated.
    // }, []);
  });

  useEffect(() => {
    console.log(`[Cockpit.js] 2nd useEffect`);
    return () => {
      console.log(`[Cockpit.js] cleanup in 2nd useEffect..`);
    };
  });

  const assignedClasses = [];
  if (props.personsLength < 1) {
    assignedClasses.push(classes.strike);
  }

  if (props.personsLength < 2) {
    assignedClasses.push(classes.yellow);
  }

  if (props.personsLength < 3) {
    document.querySelector('h1').innerHTML = '😭 React Course 😨';
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={assignedClasses.join(' ')}>React Person Manager</h1>
      <button ref={buttonRef} onClick={props.togglePersonsDiv} key={1}>
        Show/Hide Persons
      </button>
      <button onClick={props.restorePersons} key={2}>
        Restore Persons
      </button>
      {/* <AuthContext.Consumer>
        {(context) => ( */}
          <button className={classes.personButtons} onClick={authContext.loginMethod}>
            {/*the on click method now refers to the context loginMethod, which in turn points to the loginMethod created in App.js*/}
            Log in
          </button>
        {/* )}
      </AuthContext.Consumer> */}
    </div>
  );
};

//React.memo() is like shouldComponentUpdate for functional components and will only trigger a rerender if something changes within the component
export default React.memo(cockpit);
