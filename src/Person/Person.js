import React, { Component } from 'react';
import classes from './Person.css';

const person = (props) => {
  const rando = Math.random()

  if (rando > 0.7) {
    throw new Error('Something went wrong inside Perons component')
  }
  
  return (
    <div className={classes.personContainer}>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      {/* props.children allows me to render content that is placed between the opening and closing tags of my component in App.js */}
      <p>{props.children}</p>
      <input type="text" onChange={props.handleInputName} placeholder={`i.e. ${props.name}`} />
      <button style={buttonStyle} onClick={props.deletePerson}>Delete Person</button>
    </div>
  );
};

const buttonStyle = {
  padding: 3,
  marginLeft: 3,
  borderRadius: 3,
  border: '1px solid #2e2e2e',
  boxShadow: '1px 1px 3px #636363',
  cursor: 'pointer',
}
export default person;
