import React, { Component } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component{
  render() {
    return (
      <div className={classes.personContainer}>
        <p>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        {/* props.children allows me to render content that is placed between the opening and closing tags of my component in App.js */}
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.handleInputName} placeholder={`i.e. ${this.props.name}`} />
        <button style={buttonStyle} onClick={this.props.deletePerson}>Delete Person</button>
      </div>
    );
  }
}

const buttonStyle = {
  padding: 3,
  marginLeft: 3,
  borderRadius: 3,
  border: '1px solid #2e2e2e',
  boxShadow: '1px 1px 3px #636363',
  cursor: 'pointer',
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  handleInputName: PropTypes.func,
  deletePerson: PropTypes.func,
}

export default Person;
