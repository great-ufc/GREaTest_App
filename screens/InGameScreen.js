import React from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";

import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton
} from "react-native-popup-dialog";

import styles from "../assets/styles/mainStyle";
import DialogWinner from "../components/DialogWinner";
import DialogEncerrar from "../components/DialogEncerrar";
import DialogTimer from "../components/DialogTimer";
import DialogDado from "../components/DialogDado";

export default class InGameScreen extends React.Component {
  static navigationOptions = {
    title: null,
    header: () => {}
  };
  np = 0;

  aspX = styles.Constants.aspX;
  aspY = styles.Constants.aspY;

  constructor(props) {
    super(props);

    this.state = {
      alarm: null,

      nplayers: 0,
      visibleDice: false,
      visibleWinner: false,
      timerVisible: false,
      pontos: [0, 0, 0, 0, 0, 0, 0],

      jogadores: this.props.navigation.getParam("jogadores", []),
      maxPontosIndex: 0,
      dudeMax: {},
      visibleEncerrar: false
    };
  }

  // === mais e menos um ===

  maisUm = k => {
    jogs = this.state.jogadores;

    for (j = 0; j < jogs.length; j++) {
      if (jogs[j].chave === k) {
        jogs[j].pontos = jogs[j].pontos + 1;
      }
    }

    this.setState({
      jogadores: jogs
    });
  };
  menosUm = k => {
    jogs = this.state.jogadores;

    for (j = 0; j < jogs.length; j++) {
      if (jogs[j].chave === k && jogs[j].pontos > 0) {
        jogs[j].pontos = jogs[j].pontos - 1;
      }
    }

    this.setState({
      jogadores: jogs
    });
  };

  // === mapa nos jogadores ===

  render() {
    const adiciona_jogadores = this.state.jogadores.map((jogador, index) => {
      return (
        <View key={jogador.chave} pass_in_jogador={jogador}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: styles.color.cinzaClaro
            }}
          >
            <ScrollView horizontal={true} style={{ width: 140 * this.aspX }}>
              <Text
                style={[
                  styles.text.subtitle,
                  {
                    color: styles.color.cinza,
                    marginLeft: 0,
                    padding: 10 * this.aspX,
                    fontSize: 19
                  }
                ]}
              >
                {jogador.content}
              </Text>
            </ScrollView>

            <TouchableOpacity
              onPress={() => this.menosUm(jogador.chave)}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={[styles.button.RoundButtonRed]}> -1 </Text>
            </TouchableOpacity>

            <Text style={styles.text.destaque}>{jogador.pontos}</Text>

            <TouchableOpacity
              onPress={() => {
                this.maisUm(jogador.chave);
              }}
            >
              <Text style={[styles.button.RoundButtonDark]}>+1</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    });

    return (
      <View>
        {/** toolbar */}
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          {/** btn MENU */}
          <View
            style={{
              justifyContent: "flex-start",
              backgroundColor: styles.color.verdeMusgo,
              marginTop: 19 * this.aspY,
              padding: 10 * this.aspX,
              paddingTop: 14 * this.aspY,
              flexDirection: "row",
              flex: 1,
              resizeMode: "stratch"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
            >
              <Image
                source={require("../assets/images/menu.png")}
                style={styles.image.iconToolbar}
              />
            </TouchableOpacity>
          </View>
          {/** btn TIMER */}
          <View
            style={{
              justifyContent: "flex-end",
              backgroundColor: styles.color.verdeMusgo,
              marginTop: 19 * this.aspY,
              padding: 10 * this.aspX,
              paddingTop: 14 * this.aspY,
              marginRight: 0,
              paddingRight: 5 * this.aspX,
              resizeMode: "contain",
              flexDirection: "row"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.setState({ timerVisible: true });
              }}
            >
              <Image
                source={require("../assets/images/timerwhite.png")}
                style={styles.image.iconToolbar}
              />
            </TouchableOpacity>
          </View>
          {/** btn DADO */}
          <View
            style={{
              justifyContent: "flex-end",
              backgroundColor: styles.color.verdeMusgo,
              marginTop: 19 * this.aspY,
              padding: 10 * this.aspX,
              paddingTop: 14 * this.aspY,
              marginLeft: 0,
              paddingLeft: 5 * this.aspX,

              flexDirection: "row"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.setState({ visibleDice: true });
              }}
            >
              <Image
                source={require("../assets/images/dicew2.png")}
                style={styles.image.iconToolbar}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {/** BODY */}
          <View style={styles.container.contentContainerLeft}>
            <Text style={styles.text.title}>JOGADORES</Text>
          </View>

          <ScrollView
            contentContainerStyle={{ alignItems: "center" }}
            style={{ height: styles.heightScreen * 0.55 }}
          >
            {adiciona_jogadores}
          </ScrollView>

          <View
            style={{ padding: 10, backgroundColor: "white", marginBottom: 10 }}
          >
            <TouchableOpacity
              onPress={() => this.setState({ visibleWinner: true })}
              style={[
                styles.container.centerContainer,
                { padding: 10, margin: 0 }
              ]}
            >
              <Text style={styles.button.mainButtonRed}>ENCERRAR PARTIDA</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* === dialogs === */}

        <DialogDado
          title={"Dado"}
          styles={styles}
          visible={this.state.visibleDice}
          onCancelAction={() => {
            this.setState({ visibleDice: false });
          }}
        />

        <DialogEncerrar
          title={"Fim de Partida!"}
          styles={styles}
          visible={this.state.visibleEncerrar}
          onCancelAction={() => {
            this.setState({ visibleEncerrar: false });
          }}
          onOkAction={() => {
            this.setState({ visibleEncerrar: false });
            this.props.navigation.popToTop();
          }}
        />

        <DialogWinner
          styles={styles}
          visible={this.state.visibleWinner}
          title={"Fim de Partida!"}
          onCancelAction={() => {
            this.setState({ visibleWinner: false });
          }}
          onOkAction={() => {
            this.setState({ visibleWinner: false });
            this.setState({ visibleEncerrar: true });
          }}
          vencedor={this._vencedor()}
        />

        <DialogTimer
          styles={styles}
          visible={this.state.timerVisible}
          onCancelAction={() => {
            this.setState({ timerVisible: false });
          }}
        />
      </View>
    );
  }

  _vencedor = () => {
    mp = this._max(this._makeArrayPoints());
    jogs = this.state.jogadores;
    winner = 0;
    nwinners = 0;

    for (j = 0; j < jogs.length; j++) {
      if (jogs[j].pontos === mp) {
        winner = j;
        nwinners = nwinners + 1;
      }
    }
    if (nwinners > 1) {
      return "EMPATE!";
    }

    return jogs[winner].content.concat(" foi o vencedor! Parabéns!");
  };

  _makeArrayPoints = () => {
    jogs = this.state.jogadores;
    v = [];
    for (j = 0; j < jogs.length; j++) {
      v.push(jogs[j].pontos);
    }
    return v;
  };

  _max = v => {
    max = 0;
    for (i = 0; i < v.length; i++) {
      if (v[max] < v[i]) {
        max = i;
      }
    }
    return v[max];
  };
}
