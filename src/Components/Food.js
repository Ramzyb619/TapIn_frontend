import React, { Component } from 'react';

class Food extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

  export default Food;
