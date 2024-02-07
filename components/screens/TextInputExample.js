import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const TextInputExample = () => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const alertItemName = () => {
    alert(
      JSON.stringify({
        "Usuario:": login,
        "Clave:": password,
      })
    );
  };

  console.log("Usuario:", login);

  return (
    <View>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Usuario"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Clave"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => alertItemName()}
      >
        <Text style={styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextInputExample;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    paddingLeft:10
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
