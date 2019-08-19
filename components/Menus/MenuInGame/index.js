import React, { Component } from "react";

import { View, TouchableOpacity, Image } from "react-native";

import styles from "../../../assets/styles/mainStyle";

export default class MenuInGame extends Component {
  render() {
    const { onPressMenu, onPressTimer, onPressDice } = this.props;
    return (
      <View style={styles.container.toolbar}>
        {/** btn MENU */}
        <View
          style={{
            justifyContent: "flex-start",
            backgroundColor: styles.color.verdeMusgo,
            flexDirection: "row",
            flex: 1,
            resizeMode: "stratch"
          }}
        >
          <TouchableOpacity onPress={onPressMenu}>
            <Image
              source={require("../../../assets/images/menu.png")}
              style={styles.image.iconToolbar}
            />
          </TouchableOpacity>
        </View>
        {/** btn TIMER */}
        <View
          style={{
            justifyContent: "flex-end",
            backgroundColor: styles.color.verdeMusgo,
            marginRight: 15,
            resizeMode: "contain",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity onPress={onPressTimer}>
            <Image
              source={require("../../../assets/images/timerwhite.png")}
              style={styles.image.iconToolbar}
            />
          </TouchableOpacity>
        </View>
        {/** btn DADO */}
        <View
          style={{
            justifyContent: "flex-end",
            backgroundColor: styles.color.verdeMusgo,
            marginRight: 15,

            flexDirection: "row"
          }}
        >
          <TouchableOpacity onPress={onPressDice}>
            <Image
              source={require("../../../assets/images/dicew2.png")}
              style={styles.image.iconToolbar}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
