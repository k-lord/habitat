import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
let axios = require("axios");


class Button extends Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
    axios.put('http://18.221.127.241:3001/user/5e7022a44e0bde55d7d0b8d2/newjournal', {
      feels: "testing, testing, 123"
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.style} >
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

export default Button;