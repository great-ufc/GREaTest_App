import React, { Component } from "react";

import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton
} from "react-native-popup-dialog";

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
      ]
    };
  }

  // === animatinng ===

  playDice = () => {
    var max = 6;
    var min = 0;
    let indexImg = Math.floor(Math.random() * (max - min)) + min;

    this.setState({
      uridavez: indexImg
    });
    this.img

      .scale(1.1, { duration: 70, easing: Easing.bounce })
      .wait(10)
      .scale(1.0, { duration: 10 })
      // .moveY(10, { duration: 50 })
      .start();
  };

  render() {
    const { styles, visible, title, onCancelAction } = this.props;
    return (
      <View
        style={[styles.container.centerContainer, { padding: 0, margin: 0 }]}
      >
        {/** pop up do dado */}
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
              <DialogButton text="Fechar" onPress={onCancelAction} />
              <DialogButton text="JOGAR" onPress={this.playDice} />
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
              <Anime.View ref={ref => (this.img = ref)} onClick={this.onClick}>
                <Image
                  // source={this.state.uriImage[this.state.uridavez]}
                  source={this.state.uriImage[this.state.uridavez]}
                  style={{
                    width: 140,
                    height: 140,
                    resizeMode: "contain"
                  }}
                  blurRadius={1}
                />
              </Anime.View>
              {/* <Image
                style={{
                  width: 130,
                  height: 100,
                  resizeMode: "contain"
                }}
                source={this.state.uriImage[this.state.uridavez]}
              /> */}
            </View>
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}
