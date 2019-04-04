import React, { Component } from 'react';

const person = (props) => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      {/* props.children allows me to render content that is placed between the opening and closing tags of my component in App.js */}
      <p>{props.children}</p>
    </div>
  );
};

export default person;
