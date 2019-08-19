import React, { Component } from "react";

import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton
} from "react-native-popup-dialog";

import { View, Animated } from "react-native";

// import { Container } from './styles';

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
        require("../../assets/images/dado6.png"),
        require("../../assets/images/threedots.png")
      ],
      fadeAnim: new Animated.Value(0),
      dice: require("../../assets/images/threedots.png"),
      widthAnimatedd: new Animated.Value(120)
    };
  }

  // === animatinng ===

  animeImageLoad = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1
    }).start();
  };

  playDice = () => {
    var max = 6;
    var min = 0;
    let indexImg = Math.floor(Math.random() * (max - min)) + min;

    this.setState({
      uridavez: indexImg,

      dice: this.state.uriImage[indexImg]
    });
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
              <Animated.Image
                // source={this.state.uriImage[this.state.uridavez]}
                source={this.state.dice}
                style={{
                  opacity: this.state.fadeAnim, // Binds directly
                  width: 130,
                  height: 100,
                  resizeMode: "contain"
                }}
                onLoad={this.animeImageLoad}
                blurRadius={1}
              />
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
