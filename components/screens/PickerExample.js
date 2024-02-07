import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { players, getPlayerInit } from "../utils/Utilities";
import { useEffect, useState } from "react";

const PickerExample = () => {
  const [player, setPlayer] = useState(players[0]);
  
  // Efecto para simular consulta de data en DB
  useEffect(() => {
    const random = getPlayerInit();
    setPlayer(players[random]);
  }, []);

  const playerHandler = (itemValue) => {
    const playerFind = players.find((item) => item.value === itemValue);
    setPlayer(playerFind);
  };

  return (
    <View >
      <Picker
        selectedValue={player.value}
        onValueChange={(itemValue, itemIndex) => {
          playerHandler(itemValue);
        }}   
        style={{ backgroundColor: "#c19eeb", borderBlockColor:"black", borderRadius: 25}}
      >
        {players.map((item) => (
          <Picker.Item
            key={item.label}
            label={item.label}
            value={item.value}
           
          />
        ))}
      </Picker>      
      <Text style={styles.text}>{player.value}</Text>
    </View>
  );
};

export default PickerExample;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    color: "red",
  },
});
