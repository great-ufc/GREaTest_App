import React, { Component } from "react";

import { Text, View } from "react-native";

import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton
} from "react-native-popup-dialog";

export default class DialogConfirm extends Component {
  render() {
    const { styles, visible, content, onCancelAction, onOkAction } = this.props;

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
          dialogAnimation={
            new SlideAnimation({
              slideFrom: "bottom"
            })
          }
          dialogTitle={<DialogTitle title={""} />}
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
                  height: styles.heightScreen * 0.15,
                  justifyContent: "center",
                  alignItems: "center"
                }
              ]}
            >
              <Text
                style={[
                  styles.text.title,
                  {
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                    padding: 0
                  }
                ]}
              >
                {content}
              </Text>
            </View>
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}
