import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    TouchableOpacity,
    Image,
  } from 'react-native';

import Styles from '../assets/styles/mainStyle';

export default class RulesScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Regras do Jogo',
    header: {}
  };

  aspX = Styles.Constants.aspX;
  aspY = Styles.Constants.aspY;

  render() {
    return (
      <View>
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
        <View>
          <SectionList contentContainerStyle={{alignItems: "flex-start"}} style={[{
            margin: 10 * this.aspX, 
            marginTop: 0,
            marginLeft: 0, 
            padding: 5 * this.aspX, 
            height: Styles.heightScreen * 0.86,
            marginTop: 10 * this.aspY,
            marginBottom: 20 * this.aspY,
          }]}
            renderItem={({item, index, section}) => <Text style={[styles.paragraphText, ]} key={index}>{item}</Text>}
            renderSectionHeader={({section: {title}}) => (
                <Text style={[styles.titles, {marginTop: 15 * this.aspY, width: Styles.widthScreen}]}>{title}</Text>
            )}
            sections={[
                {title: "Regras do Jogo", data: [
                    "\u2023  O jogo pode ser jogado por até 7 jogadores.",
                    "\u2023  O jogador que iniciará o jogo é escolhido de forma aleatória. A ordem de jogada é no sentido anti-horário.",
                    "\u2023  O Jogo possui três baralhos: de Desafios, Bônus e de Jogo. Cada jogador recebe 5 cartas do Baralho de Jogo e 5 cartas do Baralho de Desafios são postas sobre a mesa.",
                    "\u2023  Para poder fazer sua jogada, o jogador precisa ter uma carta do tipo Testador no seu campo.",
                    "\u2023  Cada Carta Testador dá o direito de escolher até duas situações para resolver. Um jogador pode ter somente uma carta Testador em campo, sem auxílio de Cartas Bônus.",
                    "\u2023  Quando for seu turno, o jogador pode puxar até duas cartas do Baralho de Jogo e escolher até duas situações que estão na mesa para resolvê-las",
                    "\u2023  Para resolver uma situação, o jogador escolhe uma carta de sua mão e combina com a Carta Situação em campo. Com isso, a carta situação pode ser virada e a resposta é mostrada.",
                    "\u2023  Caso o jogador acerte, ele joga o dado e se o número obtido estiver dentre os números esperados na carta desafio (no verso), o jogador ganha um ponto e pode puxar uma carta do Baralho Bônus.",
                    "\u2023  Cada carta bônus tem um efeito diferente.",
                    "\u2023  Ganha quem chegar a 7 pontos primeiro",
                    ""
                ]},
            ]}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  padraoContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  padraoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  paragraphText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
    padding: 15,
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
  titles: {
    fontSize: 20,
    padding: 15,
    color: 'rgba(10,10,10, 1)',
    lineHeight: 24,
    textAlign: 'left',
    borderColor: 'rgba(96,100,109, 0.5)',
    borderRadius: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    color: "#135b33"
  },
});
