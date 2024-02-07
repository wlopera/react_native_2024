import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const CustonButton = ({onAction, customButtonStyle, customTextStyle, title}) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.pressed, customButtonStyle]
            : [styles.buttonContainer, customButtonStyle]
        }
        onPress={onAction}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={[styles.buttonText, customTextStyle]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustonButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    borderRadius: 40,
    marginVertical: 16,
    marginHorizontal: 80
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
