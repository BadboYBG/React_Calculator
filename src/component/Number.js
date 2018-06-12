import React, { Component } from 'react';
import $ from 'jquery'
class Number extends Component {
  constructor(props) {
   super(props);
  }
  render() {
    return(
      <button value={this.props.number} className={this.props.className}
        id={this.props.id} onClick = {this.props.onclick}>
        {this.props.number}</button>
    );
  }
}
export default Number;
