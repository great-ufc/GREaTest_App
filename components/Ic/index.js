import React, { Component } from "react";

//import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// import { Container } from './styles';

export default class Ic extends Component {
  render() {
    return <Icon name={this.props.name} size={28} color={this.props.color} />;
  }
}
