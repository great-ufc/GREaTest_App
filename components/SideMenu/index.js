import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ic from "../Ic";
import Linker from "../Linker";

class SideMenu extends Component {
  navLink(nav, text, iconName) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate(nav);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            marginLeft: 10
          }}
        >
          <Ic name={iconName} color="#135b33" />
          <Text style={styles.link}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topLinks}>
          <ImageBackground
            source={require("../../assets/images/grafos.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.mainLinks}>
          {this.navLink("Home", "Home", "home")}
          {this.navLink("About", "Sobre", "bookmark")}
          {this.navLink("Rules", "Regras", "pencil")}
        </View>
        <View style={styles.bottomView}>
          <View style={{ flexDirection: "row" }}>
            <Ic name="globe" color="orange" />
            <Linker
              text="Visite nosso site"
              href="http://pesquisa.great.ufc.br/greatest/"
              style={{
                fontSize: 15,
                color: "orange",
                fontWeight: "600",
                marginLeft: 10
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  },
  topLinks: {
    height: 160,
    backgroundColor: "#135b33"
  },
  mainLinks: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 45
  },
  bottomView: {
    position: "absolute",
    bottom: 20,
    right: 20
  },
  link: {
    fontSize: 18,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: "left",
    color: "#218a50"
  }
});

export default SideMenu;
