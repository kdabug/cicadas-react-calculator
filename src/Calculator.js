import React, { Component } from "react";

import "./Calculator.css";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      valueOne: "",
      valueTwo: "",
      total: ""
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" />
          <span>+</span>
          <input type="text" />
          <span>=</span>
          <h3>Addition results go here!</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
