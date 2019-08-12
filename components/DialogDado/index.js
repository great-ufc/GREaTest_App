import React, { Component } from "react";

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
        require("../../assets/images/dado6.png")
      ]
    };
  }

  // === animating ===

  imageAnimated = new Animated.Value(0);

  handleImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1
    }).start();
  };

  render() {
    const { styles, visible, title, onCancelAction } = props;
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
              <DialogButton
                text="JOGAR"
                onPress={() => {
                  var max = 6;
                  var min = 0;
                  let indexImg = Math.floor(Math.random() * (max - min)) + min;
                  this.imageAnimated = new Animated.value(0);
                  this.setState({ uridavez: indexImg });
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
                  height: styles.heightScreen * 0.15
                }
              ]}
            >
              <Animated.Image
                source={this.state.uriImage[this.state.uridavez]}
                style={[
                  style,
                  {
                    opacity: this.imageAnimated,
                    width: 130,
                    height: 100,
                    resizeMode: "contain"
                  }
                ]}
                onLoad={this.handleImageLoad}
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
