import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AdvanceComponent = ({ title, percentage }) => {
  const icon =
    percentage === 0 ? (
      <Ionicons name="radio-button-on-sharp" color="#d6d5d3f8" size={25} />
    ) : (
      <Ionicons name="checkmark-circle-sharp" color="#f17431" size={25} />
    );

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.total}>
          <Text>
            {percentage !== -1 &&
              percentage + String(percentage === 0 ? " B  " : " KB  ")}
          </Text>
          {percentage === -1 ? (
            <ActivityIndicator />
          ) : (
            <View style={styles.icon}>{icon}</View>
          )}
        </View>
      </View>
    </View>
  );
};

export default AdvanceComponent;

const styles = StyleSheet.create({
  title: { fontWeight: "bold", fontSize: 15 },
  row: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  total: { flexDirection: "row", justifyContent: "space-between" },
  icon: { marginVertical: -5 },
});
