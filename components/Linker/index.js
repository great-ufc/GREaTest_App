import React, { Component } from "react";

import { Text, StyleSheet } from "react-native";

import { Linking } from "expo";

export default class Linker extends Component {
  _handlePress = () => {
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };
  render() {
    return (
      <Text
        style={(styles.textLink, this.props.style)}
        onPress={this._handlePress}
      >
        {this.props.text}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  textLink: {
    color: "orange"
  }
});
