import React, { Component } from "react";

import { View, TouchableOpacity, Image } from "react-native";

import styles from "../../../assets/styles/mainStyle";

export default class MenuWhite extends Component {
  /**
   * This is returns a component to be displayied on the left
   * side of toolbar or null.
   */
  Left = () => {
    const { LeftComponent } = this.props;
    if (LeftComponent) {
      return (
        <View
          style={{
            justifyContent: "flex-end",
            backgroundColor: styles.color.verdeMusgo,
            marginRight: 15,
            resizeMode: "contain",
            flexDirection: "row"
          }}
        >
          <LeftComponent />
        </View>
      );
    }
    return <></>;
  };

  render() {
    const { onPress } = this.props;
    return (
      <View style={styles.container.toolbar}>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "row",
            flex: 1
          }}
        >
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require("../../../assets/images/menu.png")}
              style={styles.image.iconToolbar}
            />
          </TouchableOpacity>
        </View>

        <this.Left />
      </View>
    );
  }
}
