import React, { Component } from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="person-container">
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      {/* props.children allows me to render content that is placed between the opening and closing tags of my component in App.js */}
      <p>{props.children}</p>
      <input type="text" onChange={props.handleInputName} placeholder={`i.e. ${props.name}`} />
      <button style={buttonStyle} onClick={props.click}>Delete Person</button>
    </div>
  );
};

const buttonStyle = {
  padding: 3,
  marginLeft: 3,
  borderRadius: 3,
  border: '1px solid #ccc',
  boxShadow: '1px 1px 3px lightblue',
  cursor: 'pointer',
}
export default person;
