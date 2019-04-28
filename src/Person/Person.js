import React, { Component } from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="person-container">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      {/* props.children allows me to render content that is placed between the opening and closing tags of my component in App.js */}
      <p>{props.children}</p>
      <input type="text" onChange={props.handleInputName} placeholder={`i.e. ${props.name}`} />
    </div>
  );
};

export default person;
