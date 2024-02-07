import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BasicModal from "../modal/BasicModal";
import CustonButton from "../ui/CustonButton";

const Main = () => {
  const [visible, setVisible] = useState(false);

  const onModalVisibleHandler = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.text}>Ventana principal del APP</Text>
      </View>
      <CustonButton
        onAction={onModalVisibleHandler}
        customButtonStyle={styles.customButtonStyle}
        customTextStyle={styles.customTextStyle}
        title="MOSTRAR MODAL"
      />
      <BasicModal visible={visible} onVisible={onModalVisibleHandler} />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewText: {
    alignItems: "center",
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  customButtonStyle: {
    backgroundColor: "#0ce70c",
    marginVertical: 20,
  },
  customTextStyle: {
    color: "black",
    textAlign: "center",
  },
});
