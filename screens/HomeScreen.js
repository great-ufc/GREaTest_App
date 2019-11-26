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
import MenuWhite from "../components/Menus/MenuWhite";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  aspX = styles.Constants.aspX;
  aspY = styles.Constants.aspY;

  render() {
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
              Este é o aplicativo de ajuda do GreaTest Game. Com ele voce pode
              conferir as regras do Jogo, contar os pontos de cada jogador e,
              ainda, pode utilizar um dado virtual! Divirta-se!
            </Text>
          </View>

          <View style={{ alignItems: "center", padding: 15 }}>
            <TouchableOpacity onPress={this._goToConfigPage}>
              <Text style={styles.button.mainButtonLight}>Criar Novo Jogo</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }

  _goToConfigPage = () => {
    this.props.navigation.navigate("Settings");
  };
}
