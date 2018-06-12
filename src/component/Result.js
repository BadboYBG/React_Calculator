import React, { Component } from 'react';
class Result extends React.Component {

   componentWillMount() {
      console.log('ComponentResult WILL MOUNT!')
   }
   componentDidMount() {
      console.log('ComponentResult DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {
      console.log(newProps.text + 'ComponentResult WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('ComponentResult WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {

      console.log('ComponentResult DID UPDATE! === My number:  ' + this.props.myNumber )
   }
   componentWillUnmount() {
      console.log('ComponentResult WILL UNMOUNT!')
   }
   render() {
      return (
         <div>
            <div id="result">{this.props.myNumber}</div>
         </div>
      );
   }
}
export default Result;
