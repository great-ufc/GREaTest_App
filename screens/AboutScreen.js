import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  SectionList,
  View,
  Dimensions,TouchableOpacity,
} from 'react-native';

import Styles from '../assets/styles/mainStyle';

const {width} = Dimensions.get('window');
const numberGrid = 3;
const itemWidth = width / numberGrid;

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Sobre',
    header:{}
  };

  aspX = Styles.Constants.aspX;
  aspY = Styles.Constants.aspY;

  render() {
    return (
      <View style={styles.container}>
        <View style={Styles.container.toolbar}>            
          <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <TouchableOpacity
              onPress={() => {this.props.navigation.openDrawer();}} 
              >
              <Image source={require('../assets/images/menu.png')}
                style={Styles.image.iconToolbar}
                />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/images/great.jpg')}
            style={styles.itemImage}
          />
          <Image 
            source={require('../assets/images/mdcc.png')}
            style={styles.itemImage}
            /> 
          <Image 
            source={require('../assets/images/ufc.jpg')}
            style={styles.itemImage}
          /> 
        </View>

        <ScrollView contentContainerStyle={{alignItems: "flex-start"}} style={{width: Styles.widthScreen, height: Styles.heightScreen*0.65}}>
          <View>

          <SectionList contentContainerStyle={{alignItems: "flex-start"}} style={[{marginTop: 10 * this.aspY, marginBottom: 20 * this.aspY,margin: 0, marginLeft: 0, padding: 5 * this.aspX,}]}
            renderItem={({item, index, section}) => <Text style={[styles.paragraphText, {margin: 0, paddingBottom: 15 * this.aspY,paddingHorizontal: 10 * this.aspX}]} key={index}>{item}</Text>}
            renderSectionHeader={({section: {title}}) => (
                <Text style={[styles.titles, {paddingVertical: 10 * this.aspY,paddingHorizontal: 10 * this.aspX, color: Styles.color.verdeMusgo, width: Styles.widthScreen}]}>{title}</Text>
            )}
            sections={[
                {title: "O que é?", data: [
                    "O GreaTest Card Game é um jogo multiplayer criado para o ensino de testes de software, visando o ensino nessa área de forma mais lúdica.",
                    " A criação desse jogo foi baseada em outros jogos como o Munchkin, no qual os jogadores são colocados para resolver desafios com as cartas em sua mão para poder ganhar prêmios a cada desafio superado.",
                    " No jogo proposto, os desafios são cenários de uso de uma aplicação e os jogadores tem que acertar um tipo de teste de software que quando executado pode revelar a situação descrita."
                  ]},
                  {title: "Site do Jogo", data: [
                    "http://pesquisa.great.ufc.br/greattest/initial/"
                  ]},
                  {title: "Grupo de Pesquisa e Apoio", data: [
                    "\u2023 GREat - Grupo de Redes de Computadores, Engenharia de Software e Sistemas",
                    "\u2023 UFC - Universidade Federal do Ceará",
                    "\u2023 MDCC - Mestrado e Doutorado em Ciência da Computação"
                  ]},
                  {title: "Autores do Jogo", data: [
                    "\u2023 Thiago A. Beppe∗",
                    "\u2023 Ítalo Linhares de Araújo;",
                     "\u2023 Bruno Sabóia Aragão†",
                     "\u2023 Ismayle de Sousa Santos",
                     "\u2023 Davi Ximenes",
                     "\u2023 Rossana M. Castro Andrade‡"
                  ]},
                  {title: "App Desenvolvido Por", data: [
                    "\u2023 Rubens A. S. Silva",
                    "\u2023 Joseane Vale",
                    "\u2023 João Bosco Aragão",
                    "\u2023 Bruno Sabóia",
                    "\u2023 Ismayle Santos",
                    "\u2023 Rossana Andrade",
                  ]},
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
    paddingTop: 10 * this.aspX,
    backgroundColor: '#fff',
  },
  padraoContainer: {
    alignItems: 'center',
    marginHorizontal: 50 * this.aspX,
  },
  padraoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24 * this.aspY,
    textAlign: 'center',
    padding: 15 * this.aspX,
  },
  paragraphText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24 * this.aspY,
    textAlign: 'left',
    padding: 15 * this.aspX,
    paddingBottom: 5 * this.aspY,
  },
  titles: {
    fontSize: 22,
    padding: 15 * this.aspX,
    paddingTop: 20 * this.aspY,
    color: 'rgba(10,10,10, 1)',
    lineHeight: 24 * this.aspY,
    textAlign: 'left',
    borderColor: 'rgba(96,100,109, 0.5)',
    borderRadius: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  itemImage: {
    width: itemWidth,
    height: itemWidth,
    resizeMode: 'contain',
    marginTop: 3 * this.aspY,
  },
});
