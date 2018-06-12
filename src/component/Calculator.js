import React, { Component } from 'react';
import Number from './Number'
import './Calculator.css'

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    }
  }

  render() {
    return (
        <div id="background">
          <div id="result">{this.state.num}</div>
          <div id="main">
            <div id="first-rows">
            </div>
             <div className="rows">
              <Number number = 'Del' className="del-bg" id="delete" />
              <Number number = '%' className="btn-style operator opera-bg fall-back" />
              <Number number = '+' className="btn-style opera-bg value align operator" />
            </div>
            <div className="rows">
              <Number number = '7' className = "btn-style num-bg num first-child" />
              <Number number = '8' className = "btn-style num-bg num" />
              <Number number = '9' className = "btn-style num-bg num" />
              <Number number = '-' className="btn-style opera-bg operator" />
            </div>
            <div className="rows">
              <Number number = '4' className = "btn-style num-bg num first-child" />
              <Number number = '5' className = "btn-style num-bg num" />
              <Number number = '6' className = "btn-style num-bg num" />
              <Number number = '*' className="btn-style opera-bg operator" />
            </div>
            <div className="rows">
              <Number number = '1' className = "btn-style num-bg num first-child" />
              <Number number = '2' className = "btn-style num-bg num" />
              <Number number = '3' className = "btn-style num-bg num" />
              <Number number = '/' className="btn-style opera-bg operator" />
            </div>
            <div className="rows">
              <Number number = '0' className = "num-bg zero" id="delete" />
              <Number number = '.' className = "btn-style num-bg period fall-back" />
              <Number number = '=' className = "eqn align" id="eqn-bg" />
            </div>
          </div>
        </div>
    );
  }
}

export default Calculator;
