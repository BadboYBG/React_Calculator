import React, { Component } from 'react';
import Number from './Number'
import Result from './Result'
import './Calculator.css'

class Calculator extends Component {

  constructor(props) {
    super(props);
    const numbers = [
      [{Del: 'Del'}, {res: '%'}, {sum: '+'}],
      [7: 7, 8: 8, 9: 9,{sub: '-'}],
      [4: 4, 5: 5, 6: 6,{mul: '*'}],
      [{1: 1}, 2: 2, 3: 3,{div: '/'}],
      [0: '0', {dot: '.'}, {result: '='}]
    ];
    this.state = {
      num: 0,
      cal: '',
      first_number: 0,
      last_number: 0,
      check: false,
      delete: false
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.log(this.state);
  }

  setNewNumber(num) {

    console.log("Delete: " + this.state.delete);
    switch (num) {
      case 'Del':
        if(this.state.delete){
          this.setState({
            num: 0,
            cal: '',
            first_number: 0,
            last_number: 0,
            check: false});
        }else{
          this.setState({num: this.state.num.substring(0,this.state.num.length-1)});
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState({cal: num, check: true});
        this.setState({first_number: parseInt(this.state.num, 10)});
        this.setState({num: this.state.num + num});
        break;
      case '=':
        this.setState({last_number: parseInt(this.state.last_number, 10), delete: true});
        switch (this.state.cal) {
          case '+':
            this.setState({num: this.state.first_number + this.state.last_number});
            break;
          case '-':
            this.setState({num: this.state.first_number - this.state.last_number});
            break;
          case '*':
            this.setState({num: this.state.first_number * this.state.last_number});
          break;
          case '/':
              if(this.state.last_number===0){
                alert("Error!");
              }else{
                this.setState({num: this.state.first_number / this.state.last_number});
              }
              break;
        }
        break;
      default:
        this.setState({num: this.state.num + num})
        if(this.state.check){
          this.setState({last_number: this.state.last_number + num})
          console.log("Last Number: " +this.state.last_number)
        }
      }

  }


  render() {
    console.log("render");
    console.log(this.state);

    return (
        <div id="background">
          <Result myNumber = {this.state.num} />
          <div id="main">
            <div id="first-rows">
            </div>
             <div className="rows">
              <Number number = 'Del' className="del-bg" id="delete" onclick = {()=>this.setNewNumber('Del')} />
              <Number number = '%' className="btn-style operator opera-bg fall-back" />
              <Number number = '+' className="btn-style opera-bg value align operator" onclick = {()=>this.setNewNumber('+')} />
            </div>
            <div className="rows">
              <Number number = '7' className = "btn-style num-bg num first-child" onclick = {()=>this.setNewNumber(7)} />
              <Number number = '8' className = "btn-style num-bg num" onclick = {()=>this.setNewNumber(8)} />
              <Number number = '9' className = "btn-style num-bg num" onclick = {()=>this.setNewNumber(9)} />
              <Number number = '-' className="btn-style opera-bg operator" onclick = {()=>this.setNewNumber('-')} />
            </div>
            <div className="rows">
              <Number number = '4' className = "btn-style num-bg num first-child" />
              <Number number = '5' className = "btn-style num-bg num" />
              <Number number = '6' className = "btn-style num-bg num" />
              <Number number = '*' className="btn-style opera-bg operator" onclick = {()=>this.setNewNumber('*')}/>
            </div>
            <div className="rows">
              <Number number = '1' className = "btn-style num-bg num first-child" />
              <Number number = '2' className = "btn-style num-bg num" />
              <Number number = '3' className = "btn-style num-bg num" />
              <Number number = '/' className="btn-style opera-bg operator" onclick = {()=>this.setNewNumber('/')}/>
            </div>
            <div className="rows">
              <Number number = '0' className = "num-bg zero" id="delete" onclick = {()=>this.setNewNumber(0)} />
              <Number number = '.' className = "btn-style num-bg period fall-back" />
              <Number number = '=' className = "eqn align" id="eqn-bg" onclick = {()=>this.setNewNumber('=')} />
            </div>
          </div>
        </div>
    );
  }
}

export default Calculator;
