import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { dataList } from "../utils/Utilities";

const ListExample = () => {
  const alertItemName = (item) => {
    alert(JSON.stringify(item));
  };

  return (
    <View>
      {dataList.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={styles.container}
          onPress={() => alertItemName(item)}
        >
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListExample;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: "#d9f9b1",
    alignItems: "center",
  },
  text: {
    color: "#4f603c",
  },
});
