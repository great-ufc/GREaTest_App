import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  SectionList,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";

import Styles from "../assets/styles/mainStyle";
import MenuWhite from "../components/Menus/MenuWhite";

const { width } = Dimensions.get("window");
const numberGrid = 3;
const itemWidth = width / numberGrid;

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Sobre",
    header: {}
  };

  aspX = Styles.Constants.aspX;
  aspY = Styles.Constants.aspY;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuWhite
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/great.jpg")}
            style={styles.itemImage}
          />
          <Image
            source={require("../assets/images/mdcc.png")}
            style={styles.itemImage}
          />
          <Image
            source={require("../assets/images/ufc.jpg")}
            style={styles.itemImage}
          />
        </View>

        <ScrollView
          contentContainerStyle={{ alignItems: "flex-start" }}
          style={{
            width: Styles.widthScreen,
            height: Styles.heightScreen * 0.65
          }}
        >
          <View>
            <SectionList
              contentContainerStyle={{ alignItems: "flex-start" }}
              style={[
                {
                  marginTop: 10,
                  marginBottom: 20,
                  margin: 0,
                  marginLeft: 0,
                  padding: 5
                }
              ]}
              renderItem={({ item, index, section }) => (
                <Text
                  style={[
                    styles.paragraphText,
                    {
                      margin: 0,
                      paddingBottom: 15,
                      paddingHorizontal: 10
                    }
                  ]}
                  key={index}
                >
                  {item}
                </Text>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text
                  style={[
                    styles.titles,
                    {
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      color: Styles.color.verdeMusgo,
                      width: Styles.widthScreen
                    }
                  ]}
                >
                  {title}
                </Text>
              )}
              sections={[
                {
                  title: "O que é?",
                  data: [
                    "O GreaTest Card Game é um jogo multiplayer criado para o ensino de testes de software, visando o ensino nessa área de forma mais lúdica.",
                    " A criação desse jogo foi baseada em outros jogos como o Munchkin, no qual os jogadores são colocados para resolver desafios com as cartas em sua mão para poder ganhar prêmios a cada desafio superado.",
                    " No jogo proposto, os desafios são cenários de uso de uma aplicação e os jogadores tem que acertar um tipo de teste de software que quando executado pode revelar a situação descrita."
                  ]
                },
                {
                  title: "Site do Jogo",
                  data: ["pesquisa.great.ufc.br/greatest"]
                },
                {
                  title: "Grupo de Pesquisa e Apoio",
                  data: [
                    "\u2023 GREat - Grupo de Redes de Computadores, Engenharia de Software e Sistemas",
                    "\u2023 UFC - Universidade Federal do Ceará",
                    "\u2023 MDCC - Mestrado e Doutorado em Ciência da Computação"
                  ]
                },
                {
                  title: "Autores do Jogo",
                  data: [
                    "\u2023 Thiago A. Beppe∗",
                    "\u2023 Ítalo Linhares de Araújo;",
                    "\u2023 Bruno Sabóia Aragão†",
                    "\u2023 Ismayle de Sousa Santos",
                    "\u2023 Davi Ximenes",
                    "\u2023 Rossana M. Castro Andrade‡"
                  ]
                },
                {
                  title: "App Desenvolvido Por",
                  data: [
                    "\u2023 Rubens Silva",
                    "\u2023 Joseane Vale",
                    "\u2023 João Bosco Aragão",
                    "\u2023 Bruno Sabóia",
                    "\u2023 Ismayle Santos",
                    "\u2023 Rossana Andrade"
                  ]
                }
              ]}
              keyExtractor={(item, index) => item + index}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: "#fff"
  },
  padraoContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  padraoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    padding: 15
  },
  paragraphText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "left",
    padding: 15,
    paddingBottom: 5
  },
  titles: {
    fontSize: 22,
    padding: 15,
    paddingTop: 20,
    color: "rgba(10,10,10, 1)",
    lineHeight: 24,
    textAlign: "left",
    borderColor: "rgba(96,100,109, 0.5)",
    borderRadius: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0
  },
  itemImage: {
    width: itemWidth,
    height: itemWidth,
    resizeMode: "contain",
    marginTop: 3
  }
});
