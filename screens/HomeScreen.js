import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import styles from "../assets/styles/mainStyle";
import strings from "../constants/Strings";
import MenuWhite from "../components/Menus/MenuWhite";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      lg: "pt"
    };
  }

  changeLang = () => {
    this.setState({ lg: this.state.lg === "pt" ? "en" : "pt" });
  };

  aspX = styles.Constants.aspX;
  aspY = styles.Constants.aspY;

  render() {
    const { lg } = this.state;
    let flagImage =
      lg === "pt"
        ? require("../assets/images/usa-flag.png")
        : require("../assets/images/brazil-flag.png");
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={[
          styles.color.verdeMusgo,
          styles.color.verdeFolha,
          styles.color.verdeFolha
        ]}
      >
        <MenuWhite
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
          LeftComponent={() => (
            <TouchableOpacity
              onPress={() => {
                this.changeLang();
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center"
                }}
              >
                <Image source={flagImage} style={styles.image.iconToolbar} />
                <Text style={styles.button.TextWhiteButton}>
                  {lg === "pt" ? "EN" : "PT-BR"}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <ScrollView contentContainerStyle={styles.container.contentContainer}>
          <View style={styles.container.centerContainer}>
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.image.logo}
            />
          </View>

          <View
            style={[
              styles.container.centerContainer,
              { padding: 20, marginTop: 15, marginBottom: 15 }
            ]}
          >
            <Text style={[styles.text.warningLight, { paddingTop: 0 }]}>
              {strings.home.painel(lg)}
            </Text>
          </View>

          <View style={{ alignItems: "center", padding: 15 }}>
            <TouchableOpacity onPress={this._goToConfigPage}>
              <Text style={styles.button.mainButtonLight}>
                {strings.home.button(lg)}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }

  _goToConfigPage = () => {
    this.props.navigation.navigate("Settings", {
      lg: this.state.lg
    });
  };
}
