import React, { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      valueOne: 0,
      valueTwo: 0,
      total: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState((prevState, newState) => ({
      [name]: value
    }));
    console.log(this.state);
    let total = this.state.valueOne + this.state.valueTwo;
    this.setState((prevState, newState) => ({
      total
    }));
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input
            type="text"
            name={"valueOne"}
            value={this.state.valueOne}
            onChange={this.handleChange}
          />
          <span>+</span>
          <input
            type="text"
            onChange={this.handleChange}
            name={"valueTwo"}
            value={this.state.valueTwo}
          />
          <span>=</span>
          <h3>{this.state.total}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
