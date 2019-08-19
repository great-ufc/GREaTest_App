import React, { Component } from "react";

import { Text, View } from "react-native";

import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton
} from "react-native-popup-dialog";

export default class DialogTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textoBotaoTimer: "Iniciar",
      timer: 20,
      uridavez: 0,
      uriImage: [
        require("../../assets/images/dado1.png"),
        require("../../assets/images/dado2.png"),
        require("../../assets/images/dado3.png"),
        require("../../assets/images/dado4.png"),
        require("../../assets/images/dado5.png"),
        require("../../assets/images/dado6.png")
      ]
    };
  }

  // === did mount ? did update? ===

  componentDidUpdate() {
    // asks if the timer reached 0.
    // If so, restarts timer to 20, play alarm and stops timer
    if (this.state.timer === 0) {
      clearInterval(this.interval);
      this.setState({ timer: 20 });
      this.playAlarm();
    }
  }

  componentDidMount() {
    // constroi o alarme
    this.makeAlarm();
  }

  // === === === ===

  onStartTimer = () => {
    // verifica se ele esta em pausa
    if (this.state.textoBotaoTimer === "Pausar") {
      clearInterval(this.interval);
      this.setState({ textoBotaoTimer: "Iniciar" });
    } else {
      // para evitar bug de acelerar o timer
      if (this.state.timer === 20) {
        this.setState({ timer: 19 });
      }
      // o texto do botao muda para pausar e o timer eh setado novamente
      this.setState({ textoBotaoTimer: "Pausar" });
      this.interval = setInterval(
        () =>
          this.setState(prevState => ({
            timer: prevState.timer - 1.0
          })),
        1000
      );
    }
  };

  // === alarm stuf ===

  pauseAlarm = async () => {
    const alarme = this.state.alarm;
    try {
      await alarme.pauseAsync();
    } catch (error) {
      console.log("(pause alarm) ERRO! Nao parou de tocar");
    }
  };

  playAlarm = async () => {
    const alarme = this.state.alarm;
    try {
      await alarme.playAsync();
    } catch (error) {
      console.log("(play alarm) Erro ao tocar o alarme");
    }
  };

  makeAlarm = async () => {
    const soundObject = new Expo.Audio.Sound();
    try {
      await soundObject.loadAsync(require("../../assets/sounds/alarm.mp3"));
      this.setState({ alarm: soundObject });
    } catch (error) {
      console.log("make alarm) Erro ao criar o alarme");
    }
  };

  render() {
    const { styles, visible, onCancelAction } = this.props;

    return (
      <Dialog
        visible={visible}
        dialogAnimation={
          new SlideAnimation({
            slideFrom: "bottom"
          })
        }
        dialogTitle={<DialogTitle title="Timer" />}
        footer={
          <DialogFooter>
            <DialogButton
              text="Fechar"
              onPress={() => {
                onCancelAction();
                this.pauseAlarm();
                clearInterval(this.interval);
                this.setState({ timer: 20 });
              }}
            />

            <DialogButton
              text={this.state.textoBotaoTimer}
              onPress={this.onStartTimer}
            />
          </DialogFooter>
        }
      >
        <DialogContent>
          <View
            style={[
              styles.container.centerContainer,
              {
                width: styles.widthScreen * 0.7,
                height: styles.heightScreen * 0.15
              }
            ]}
          >
            <Text style={{ fontSize: 60 }}>{this.state.timer} s</Text>
          </View>
        </DialogContent>
      </Dialog>
    );
  }
}
