import React, { Component } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.myInputRef = React.createRef();
  }

  //*Adding this property allows me to access context outside of the JSX essentially connecting this class based component to my context behind the scenes*/
  static contextType = AuthContext;

  componentDidMount() {
    // Must use current here because the element that myInputRef points to is now stored in the current reference
    this.myInputRef.current.focus();
    console.log(this.context.isLoggedIn);
  }

  render() {
    return (
      <React.Fragment>
        <div className={classes.personContainer}>
        <AuthContext.Consumer>
          {//Consumer doesn't return JSX but a function that receives the context object
          (context) => (context.isLoggedIn ? <p>Logged In!</p> : <p>Please log in</p>)}
        </AuthContext.Consumer>
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
