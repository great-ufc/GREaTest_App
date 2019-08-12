import React, { Component } from "react";

import { ScrollView, Text, View } from "react-native";

import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton
} from "react-native-popup-dialog";

import PreImage from "../PreImage";

export default class DialogWinner extends Component {
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
              <DialogButton text="Cancelar" onPress={onCancelAction} />
              <DialogButton text="OK" onPress={onOkAction} />
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
              <View>
                <PreImage
                  thumbnailSource={require("../../assets/images/threedots.png")}
                  source={require("../../assets/images/trofeu.png")}
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain"
                  }}
                />
                {/* <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain"
                }}
                source={require("../assets/images/trofeu.png")}
              /> */}
              </View>

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
