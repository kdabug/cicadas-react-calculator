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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          <input
            type="text"
            name={this.state.valueOne}
            onChange={this.handleChange}
          />
          <span>+</span>
          <input type="text" />
          <span>=</span>
          <h3>{this.state.total}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
