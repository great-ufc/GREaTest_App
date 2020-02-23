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
      <View
        style={[
          styles.container.centerContainer,
          { justifyContent: "center", alignItems: "center" }
        ]}
      >
        {/** pop up do encerrar */}
        <Dialog
          visible={visible}
          style={{ justifyContent: "center", alignItems: "center" }}
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
                //styles.container.centerContainer,
                {
                  width: styles.widthScreen * 0.7,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10
                }
              ]}
            >
              <Text
                style={[
                  styles.text.subtitle,
                  {
                    fontSize: 25,
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                    marginTop: 20
                  }
                ]}
              >
                Sair?
              </Text>
            </View>
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}
