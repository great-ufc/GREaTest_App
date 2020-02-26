import React from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  BackHandler
} from "react-native";

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
import DialogConfirm from "../components/DialogConfirm";
import MenuInGame from "../components/Menus/MenuInGame";
import strings from "../constants/Strings";

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

    const lg = this.props.navigation.getParam("lg", "pt");

    this.state = {
      alarm: null,
      lg: lg,
      nplayers: 0,
      visibleDice: false,
      visibleWinner: false,
      timerVisible: false,
      pontos: [0, 0, 0, 0, 0, 0, 0],

      jogadores: this.props.navigation.getParam("jogadores", []),
      maxPontosIndex: 0,
      dudeMax: {},
      visibleEncerrar: false,
      confirmMaisUm: false,
      confirmMenosUm: false
    };
  }

  componentDidMount() {
    // prevent from leaving abruptaly
    this.setState({
      backHandler: BackHandler.addEventListener(
        "hardwareBackPress",
        this.handleBackPress
      )
    });
  }

  componentWillUnmount() {
    this.state.backHandler.remove();
  }

  /**
   * Called when back button is presses on android
   */
  handleBackPress = () => {
    this.setState({ visibleEncerrar: true });
    return true;
  };

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
              style={styles.button.RoundButtonRed}
              onPress={() => {
                this.setState({
                  confirmMenosUm: true,
                  jogadorAlvo: jogador.chave
                });
              }}
              // style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={[styles.button.TextWhiteButton]}> -1 </Text>
            </TouchableOpacity>

            <Text style={styles.text.destaque}>{jogador.pontos}</Text>

            <TouchableOpacity
              style={[styles.button.RoundButtonGreen]}
              onPress={() => {
                this.setState({
                  confirmMaisUm: true,
                  jogadorAlvo: jogador.chave
                });
              }}
            >
              <Text style={[styles.button.TextWhiteButton]}>+1</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    });

    const { lg } = this.state;

    return (
      <View>
        {/** toolbar */}
        <MenuInGame
          onPressDice={() => {
            this.setState({ visibleDice: true });
          }}
          onPressTimer={() => {
            this.setState({ timerVisible: true });
          }}
          onPressMenu={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View>
          {/** BODY */}
          <View style={styles.container.contentContainerLeft}>
            <Text style={styles.text.title}>
              {strings.ingame.playersTitle(lg)}
            </Text>
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
              <Text style={styles.button.mainButtonRed}>
                {strings.ingame.closeButton(lg)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* === dialogs === */}

        <DialogDado
          lg={lg}
          title={strings.ingame.dice(lg)}
          styles={styles}
          visible={this.state.visibleDice}
          onCancelAction={() => {
            this.setState({ visibleDice: false });
          }}
        />

        <DialogEncerrar
          lg={lg}
          title={strings.popup.endMatch(lg)}
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

        {/* confirmaçao mais um ponto */}
        <DialogConfirm
          lg={lg}
          content={strings.popup.increase(lg)}
          styles={styles}
          visible={this.state.confirmMaisUm}
          onCancelAction={() => {
            this.setState({ confirmMaisUm: false });
          }}
          onOkAction={() => {
            this.maisUm(this.state.jogadorAlvo);
            this.setState({ confirmMaisUm: false });
          }}
        />

        {/* confirmaçao menos um ponto  */}
        <DialogConfirm
          lg={lg}
          content={strings.popup.decrease(lg)}
          styles={styles}
          visible={this.state.confirmMenosUm}
          onCancelAction={() => {
            this.setState({ confirmMenosUm: false });
          }}
          onOkAction={() => {
            this.menosUm(this.state.jogadorAlvo);
            this.setState({ confirmMenosUm: false });
          }}
        />

        <DialogWinner
          lg={lg}
          styles={styles}
          visible={this.state.visibleWinner}
          title={strings.popup.endMatch(lg)}
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
          lg={lg}
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
      return this.state.lg === "pt" ? "EMPATE!" : "DRAW!";
    }

    return jogs[winner].content.concat(
      this.state.lg === "pt" ? " venceu! Parabéns!" : " wins!"
    );
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
