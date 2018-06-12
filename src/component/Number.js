import React, { Component } from 'react';
import $ from 'jquery'
class Number extends Component {
  constructor(props) {
   super(props);
   this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let a = true;
    switch (this.props.number) {
      case 'Del':
      case '=':
        a=false;
        break;
    }
    if(a){
      let a = $("#result").text()
      $("#result").text(a + this.props.number);
    }
  }
  render() {
    return(
      <button value={this.props.number} className={this.props.className}
        id={this.props.id} onClick = {this.handleClick}>
        {this.props.number}</button>
    );
  }
}
export default Number;
