import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
let axios = require("axios");


class Button extends Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
    axios.get('http://18.221.127.241:3001/user')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  render() {
    return (
      <TouchableOpacity
        onClick={this.handlePress.bind(this)}
        style={this.props.style} >
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}
export default Button;