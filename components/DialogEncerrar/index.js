import React, { Component } from "react";

import { Text, View } from "react-native";

import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton
} from "react-native-popup-dialog";

export default class DialogEncerrar extends Component {
  render() {
    const { styles, visible, title, onCancelAction, onOkAction } = this.props;

    return (
      <View style={[styles.container.centerContainer]}>
        {/** pop up do encerrar */}
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
                  height: styles.heightScreen * 0.15
                }
              ]}
            >
              <Text
                style={[
                  styles.text.subtitle,
                  {
                    textAlign: "center",
                    justifyContent: "center",
                    margin: 0,
                    padding: 10
                  }
                ]}
              >
                Deseja Encerrar a partida?
              </Text>
            </View>
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}
