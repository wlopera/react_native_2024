import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { dataToScroll } from "../utils/Utilities";

const ScrollViewExample = () => {
  const alertItemName = (item) => {
    alert(JSON.stringify(item));
  };

  return (
    <View>
      <ScrollView>
        {dataToScroll.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => alertItemName(item)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollViewExample;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 1,
    backgroundColor: "#d2f7f1",
  },
});
