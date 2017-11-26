import React, { Component } from 'react';
import { connect } from "react-redux"
import { add, substract } from "../redux/action"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Number</h1>
        </header>
        <p className="App-intro">
          { this.props.number }
        </p>
        <button onClick={this.props.substract}>Substract</button>
        <button onClick={this.props.add}>Add</button>
      </div>
    );
  }
}

export default connect(
  state => ({ number: state.number }),
  { add, substract }
)(App)
