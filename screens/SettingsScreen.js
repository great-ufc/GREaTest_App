import React from "react";

import {
  ToastAndroid,
  View,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  BackHandler
} from "react-native";
import styles from "../assets/styles/mainStyle";
import MenuWhite from "../components/Menus/MenuWhite";
import DialogEncerrar from "../components/DialogEncerrar";
import DialogConfirm from "../components/DialogConfirm";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  aspX = styles.Constants.aspX;
  aspY = styles.Constants.aspY;

  constructor(props) {
    super(props);
    this._addRow = this._addRow.bind(this);
    this.state = {
      visibleEncerrar: false,
      visibleConfirm: false,
      jogadores: [
        {
          chave: 1,
          title: "Jogador 1",
          content: "Jogador 1",
          pontos: 0
        },
        {
          chave: 2,
          title: "Jogador 2",
          content: "Jogador 2",
          pontos: 0
        }
      ]
    };
  }

  componentDidMount() {
    // for preventing from leaving abruptaly
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

  render() {
    let adiciona_jogadores = this.state.jogadores.map(this._mappingJog);

    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <MenuWhite
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />

        <Text style={[styles.text.title]}>Quem vai jogar?</Text>

        <Text style={styles.text.subtitle}>
          Você pode cadastrar de 2 até 7 jogadores
        </Text>

        <ScrollView
          style={{
            width: Dimensions.get("screen").width,
            flex: 1,
            borderWidth: 1,
            borderColor: styles.color.cinzaMaisClaro
          }}
          contentContainerStyle={styles.container.contentContainerLeft}
        >
          {adiciona_jogadores}
        </ScrollView>

        <View
          style={[styles.container.centerContainer, { padding: 0, margin: 0 }]}
        >
          <TouchableOpacity onPress={this._addRow}>
            <Text style={styles.button.touchableText}>
              ADICIONAR NOVO JOGADOR
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.container.centerContainer, { margin: 0 }]}>
          <TouchableOpacity
            onPress={() => this.setState({ visibleConfirm: true })}
          >
            <Text style={[styles.button.mainButtonDark]}>INICIAR JOGO</Text>
          </TouchableOpacity>
        </View>

        <DialogEncerrar
          title={""}
          styles={styles}
          visible={this.state.visibleEncerrar}
          onCancelAction={() => {
            this.setState({ visibleEncerrar: false });
          }}
          onOkAction={() => {
            this.setState({ visibleEncerrar: false });
            this.props.navigation.goBack();
          }}
        />

        <DialogConfirm
          content={"Começar a Partida?"}
          styles={styles}
          visible={this.state.visibleConfirm}
          onCancelAction={() => {
            this.setState({ visibleConfirm: false });
          }}
          onOkAction={() => {
            this._goToGamePage();
            this.setState({ visibleConfirm: false });
          }}
        />
      </KeyboardAvoidingView>
    );
  }

  _addRow() {
    if (this.state.jogadores.length < 7) {
      let s = this.state.jogadores.length;

      let k = s == 0 ? 1 : this.state.jogadores[s - 1].chave + 1;

      let cont = "Jogador " + k;

      let novo_jogador = {
        chave: k,
        title: cont,
        content: cont,
        pontos: 0
      };

      this.setState({
        jogadores: [...this.state.jogadores, novo_jogador]
      });
    } else {
      ToastAndroid.showWithGravity(
        "O máximo de jogadores por partida é 7 ",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  }

  _mappingJog = jogador => {
    return (
      <View key={jogador.chave} pass_in_jogador={jogador} style={{ flex: 0 }}>
        <Text style={[styles.text.subtitle, { paddingTop: 20 }]}>
          Jogador {jogador.chave}
        </Text>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: styles.color.cinzaClaro,
            borderBottomWidth: 1,
            paddingBottom: 15
          }}
        >
          <TextInput
            style={styles.text.input}
            placeholder="Digite o nome do Jogador..."
            onChangeText={text => this._onChangeName(text, jogador.chave)}
          />
          <View>
            <TouchableOpacity
              style={styles.button.RoundButtonRed}
              onPress={() => this._handleRemoveButton(jogador.chave)}
            >
              <Text style={[styles.button.TextWhiteButton]}>—</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  _rowContent() {
    return "Jogador";
  }

  _handleRemoveButton(chave) {
    if (this.state.jogadores.length > 2) {
      let result = this.state.jogadores.filter(
        jogadores => jogadores.chave !== chave
      );

      this.setState({
        jogadores: result
      });
    } else {
      ToastAndroid.showWithGravity(
        "Precisamos de pelo menos dois jogadores...",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER - 10
      );
      {
        /* toast "nao pode!!!" */
      }
    }
  }

  _onChangeName(text, chave) {
    let jog = this.state.jogadores;

    jog[chave - 1].content = text;

    this.setState({
      jogadores: jog
    });
  }

  _goToGamePage = () => {
    this.props.navigation.navigate("InGame", {
      jogadores: this.state.jogadores
    });
  };
}
