import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
let axios = require("axios");


class SubmitButton extends Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <TouchableOpacity
        onClick={this.props.onClick}
        style={this.props.style} >
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

export default SubmitButton;