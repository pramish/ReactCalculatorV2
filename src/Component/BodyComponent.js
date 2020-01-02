import React, { Component } from 'react';

export default class BodyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fNumber: '0',
      sNumber: '0',
      finalValue: '0',
      pickedValue: 'none'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  handleChange(e) {
    this.setState({ fNumber: e.target.value });
  }
  handleChange1(e) {
    this.setState({ sNumber: e.target.value });
  }
  handlePick(e) {
    this.setState({ pickedValue: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>React Intelligent Calculator</h1>
        <button
          type='button'
          onClick={this.handleButton}
          disabled={this.state.pickedValue === 'none'}
        >
          Generate Random Number
        </button>
        <br />
        <form onSubmit={this.handSubmit}>
          <label>First Number: </label>
          <input
            type='text'
            readOnly
            value={this.state.fNumber}
            onChange={this.handleChange}
          />
          <br />
          <label>Second Number: </label>
          <input
            type='text'
            readOnly
            value={this.state.sNumber}
            onChange={this.handleChange1}
          />
          <br />
          <label>Please pick the operator</label>
          <select value={this.state.pickedValue} onChange={this.handlePick}>
            <option value='none'>None</option>
            <option value='add'>Addition</option>
            <option value='sub'>Subtraction</option>
            <option value='div'>Division</option>
            <option value='mul'>Multiplication</option>
            <option value='mod'>Modulo</option>
          </select>
          <br />
          <label>Result is {this.state.finalValue} </label>
          <br />
        </form>
      </div>
    );
  }
  handleButton(e) {
    var minNum = 50;
    var maxNum = 100;
    var randomNumber1 = minNum + Math.random() * (maxNum - minNum);
    var randomNumber2 = minNum + Math.random() * (maxNum - minNum);
    this.setState({ fNumber: randomNumber1 });
    this.setState({ sNumber: randomNumber2 });
    const pickedOperator = this.state.pickedValue;
    switch (pickedOperator) {
      case 'add':
        this.setState({
          finalValue: parseFloat(randomNumber1) + parseFloat(randomNumber2)
        });
        break;
      case 'sub':
        this.setState({
          finalValue: parseFloat(randomNumber1) - parseFloat(randomNumber2)
        });
        break;
      case 'div':
        this.setState({
          finalValue: parseFloat(randomNumber1) / parseFloat(randomNumber2)
        });
        break;
      case 'mod':
        this.setState({
          finalValue: parseFloat(randomNumber1) % parseFloat(randomNumber2)
        });
        break;
      case 'mul':
        this.setState({
          finalValue: parseFloat(randomNumber1) * parseFloat(randomNumber2)
        });
        break;
      default:
        break;
    }
  }
}
