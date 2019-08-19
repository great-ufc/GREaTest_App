import React, { Component } from "react";

import { View, TouchableOpacity, Image } from "react-native";

import styles from "../../../assets/styles/mainStyle";

export default class MenuWhite extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <View style={styles.container.toolbar}>
        <View
          style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
        >
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require("../../../assets/images/menu.png")}
              style={styles.image.iconToolbar}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
