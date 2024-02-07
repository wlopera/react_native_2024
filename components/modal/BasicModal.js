import { Modal, Text, View, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";
import CustonButton from "../ui/CustonButton";

const BasicModal = ({ visible, onVisible }) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.header}>MODAL DE PRUEBA</Text>
            <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</Text>
            <CustonButton
              onAction={onVisible}
              customButtonStyle={styles.customButtonStyle}
              customTextStyle={styles.customTextStyle}
              title="Cerrar"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default BasicModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  header: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#044f36",
    borderRadius: 20,
    width: 280,
    // Elevacion es para Android
    elevation: 4,
    marginTop: 5,
    color: "white",
  },
  body: {
    fontSize: 15,
    padding: 8,
    backgroundColor: "#82f9d2",
    borderStyle: "solid",
    height: 150,
    borderRadius: 8,
    width: 280,
    marginTop: 8,
    textAlign: "justify"
  },
  customButtonStyle: {
    backgroundColor: "#B22222",
    width: 130,
  },
  customTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});
