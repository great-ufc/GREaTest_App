import React, { Component } from "react";

import { ScrollView, Text, View, Image } from "react-native";

import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton
} from "react-native-popup-dialog";

import { Audio } from "expo-av";

import Anime from "react-native-anime";

export default class DialogWinner extends Component {
  componentDidMount() {
    this.makeAlarm();
  }

  componentDidUpdate() {
    if (this.props.visible) {
      this.playAlarm();
    }
  }

  componentWillUnmount() {
    this.pauseAlarm();
  }

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
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require("../../assets/sounds/claps.mp3"));
      this.setState({ alarm: soundObject });
    } catch (error) {
      console.log("make alarm) Erro ao criar o alarme");
    }
  };

  render() {
    const {
      styles,
      visible,
      title,
      onCancelAction,
      onOkAction,
      vencedor
    } = this.props;

    return (
      <View style={[styles.container.centerContainer]}>
        {/** pop up do winner */}
        <Dialog
          visible={visible}
          dialogAnimation={
            new SlideAnimation({
              slideFrom: "bottom"
            })
          }
          dialogTitle={<DialogTitle title={title} />}
          footer={
            <DialogFooter>
              <DialogButton
                text="Cancelar"
                onPress={() => {
                  this.pauseAlarm();
                  onCancelAction();
                }}
              />
              <DialogButton
                text="OK"
                onPress={() => {
                  this.pauseAlarm();
                  onOkAction();
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
                  height: styles.heightScreen * 0.3
                }
              ]}
            >
              <Anime.View ref={ref => (this.img = ref)} onClick={this.onClick}>
                <Image
                  style={{
                    width: styles.heightScreen * 0.18,
                    height: styles.heightScreen * 0.18,
                    resizeMode: "contain",
                    marginBottom: 15
                  }}
                  source={require("../../assets/images/trofeu.png")}
                />
              </Anime.View>

              <ScrollView style={{ minHeight: 80 }}>
                <Text
                  style={[
                    styles.text.subtitle,
                    {
                      textAlign: "center",
                      justifyContent: "center",
                      margin: 0,
                      padding: 0
                    }
                  ]}
                >
                  {vencedor}
                </Text>
              </ScrollView>
            </View>
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}
