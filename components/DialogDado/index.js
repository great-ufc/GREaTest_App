import React, { Component } from "react";

import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton
} from "react-native-popup-dialog";

import { Audio } from "expo-av";

import Anime from "react-native-anime";

// import DiceImage from "./DiceImage";

import { View, Image, Easing } from "react-native";

export default class DialogDado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uridavez: 0,
      uriImage: [
        require("../../assets/images/dado1.png"),
        require("../../assets/images/dado2.png"),
        require("../../assets/images/dado3.png"),
        require("../../assets/images/dado4.png"),
        require("../../assets/images/dado5.png"),
        require("../../assets/images/dado6.png")
      ],
      alarm: null,
      shouldCreateSound: true
    };
  }

  componentDidMount() {
    // this.makeAlarm();
  }

  componentDidUpdate() {
    if (this.props.visible && this.state.shouldCreateSound) {
      this.makeAlarm();
      this.setState({ shouldCreateSound: false });
    }
  }

  componentWillUnmount() {
    this.pauseAlarm();
    this.state.alarm.unloadAsync();
  }

  // === sound stuf ===

  pauseAlarm = async () => {
    const som = this.state.alarm;
    try {
      await som.stopAsync();
    } catch (error) {
      console.log("(pause sound) ERRO! Nao parou de tocar: ", error);
    }
  };

  playAlarm = async () => {
    const som = this.state.alarm;
    try {
      await som.replayAsync();
    } catch (error) {
      console.log("(play sound) Erro ao tocar o som: ", error);
    }
  };

  makeAlarm = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require("../../assets/sounds/dice.mp3"));
      this.setState({ alarm: soundObject });
    } catch (error) {
      console.log(
        "make sound) Erro ao criar o som: ",
        error,
        soundObject.getStatusAsync()
      );
    }
  };

  // === animatinng ===

  playDice = async () => {
    var max = 6;
    var min = 0;
    let indexImg = Math.floor(Math.random() * (max - min)) + min;

    this.setState({
      uridavez: indexImg
    });
    await this.img
      .scale(1.3, { duration: 800, easing: Easing.bounce })
      .wait(100)
      .scale(1.0, { duration: 100 })
      // .moveY(10, { duration: 50 })
      .start();
  };

  render() {
    const { styles, visible, title, onCancelAction } = this.props;
    return (
      <View
        style={[
          {
            padding: 0,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }
        ]}
      >
        {/** pop up do dado */}
        <Dialog
          visible={visible}
          style={[
            {
              padding: 0,
              margin: 0,
              justifyContent: "center",
              alignItems: "center"
            }
          ]}
          dialogAnimation={
            new SlideAnimation({
              slideFrom: "bottom"
            })
          }
          dialogTitle={<DialogTitle title={title} />}
          footer={
            <DialogFooter>
              <DialogButton
                text="Fechar"
                onPress={() => {
                  this.pauseAlarm();
                  onCancelAction();
                }}
              />
              <DialogButton
                text="JOGAR"
                onPress={() => {
                  this.playAlarm().then(() => {
                    this.playDice();
                  });
                }}
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
                  height: styles.heightScreen * 0.15,
                  justifyContent: "center",
                  alignItems: "center"
                }
              ]}
            >
              <Anime.View
                style={{
                  padding: 10,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                ref={ref => (this.img = ref)}
                onClick={this.onClick}
              >
                <Image
                  // source={this.state.uriImage[this.state.uridavez]}
                  source={this.state.uriImage[this.state.uridavez]}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: styles.widthScreen * 0.28,
                    height: styles.widthScreen * 0.28,
                    resizeMode: "contain"
                  }}
                />
              </Anime.View>
            </View>
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}
