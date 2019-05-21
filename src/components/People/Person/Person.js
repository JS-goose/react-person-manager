import React, { Component } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props);
    this.myInputRef = React.createRef();
  }

  componentDidMount() {
    // Must use current here because the element that myInputRef points to is now stored in the current reference
    this.myInputRef.current.focus();
  }

  render() {
    return (
      <React.Fragment>
        <div className={classes.personContainer}>
        {this.props.isLoggedIn ? <p>Logged In!</p> : <p>Not Logged In</p>}
          <p>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          {/* props.children allows me to render content that is placed between the opening and closing tags of my component in App.js */}
          <p>{this.props.children}</p>
          <input
            ref={this.myInputRef}
            type="text"
            onChange={this.props.handleInputName}
            placeholder={`i.e. ${this.props.name}`}
          />
          <button className={classes.personButtons} onClick={this.props.deletePerson}>
            Delete Person
          </button>
        </div>
      </React.Fragment>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  handleInputName: PropTypes.func,
  deletePerson: PropTypes.func,
};

export default Person;
