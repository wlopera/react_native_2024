## Aplicacion React Native 2024 - Componentes Básicos

#### Drawer Navigation: @react-navigation/drawer
![image](https://github.com/wlopera/react_native_2024/assets/7141537/4b3793de-d3b4-47e5-9b1b-3dfb7c7a6678)

#### Drawer Botton Tags: @react-navigation/bottom-tabs
![image](https://github.com/wlopera/react_native_2024/assets/7141537/9a00f9b5-28a2-481a-ab5d-249d9defb538)

#### Ventanas

![image](https://github.com/wlopera/react_native_2024/assets/7141537/08ff658b-558e-476f-97d4-ad7687d89f96)

![image](https://github.com/wlopera/react_native_2024/assets/7141537/06104052-74db-4cb6-a9a0-2af29c4ef306)
![image](https://github.com/wlopera/react_native_2024/assets/7141537/d8133839-f076-4837-b75b-1e0b8f6049ab)

![image](https://github.com/wlopera/react_native_2024/assets/7141537/17adb063-7928-45c7-814c-bbbc69382cf3)
![image](https://github.com/wlopera/react_native_2024/assets/7141537/c93c1b03-77a5-4446-ab43-7dbd927b14b5)

![image](https://github.com/wlopera/react_native_2024/assets/7141537/7c4c0bcd-0e53-4aec-864c-d5217a827482)

![image](https://github.com/wlopera/react_native_2024/assets/7141537/ca10ae9f-f922-4969-a98e-33e1c12f3428)

![image](https://github.com/wlopera/react_native_2024/assets/7141537/53374467-ccc7-4998-8b87-db6c0c28f4ef)

![image](https://github.com/wlopera/react_native_2024/assets/7141537/8c72b39c-0c75-42b2-b201-892c57f5d070)

### LEVANTAR APP
* > npm cache clean --force
* > npm cache verify
* > npm -g uninstall expo-cli --save
* > npm install expo-cli --global
* > expo init guess-game
* > cd app-name
* > npm start

* limpiar cache: > npm cache clean --force
* levantar para simuladorfes y celulares: > npm start --tunnel
* levantar APP para simuladores: npm start -- --reset-cache

#### Codigos resaltanes:

App.js
```
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { drawerScreenList } from "./components/utils/DrawerScreenList";
import Colors from "./constants/Colors";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerTintColor: "white",
            drawerActiveBackgroundColor: "#f0e1ff",
            drawerActiveTintColor: "#3c0a6b",
            headerStyle: { backgroundColor: "#3c0a6b" },
          }}
        >
          {drawerScreenList.map((item, index) => (
            <Drawer.Screen
              key={item.id}
              name={item.name}
              component={item.component}
              options={{
                drawerLabel: item.label,
                drawerIcon: ({ color, size }) => (
                  <Ionicons name={item.iconName} color={color} size={size} />
                ),
              }}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
});
```

DrawerScreenList.js: Lista de Valores de navegación
```
import Main from "../screens/Main";
import ListExample from "../screens/ListExample";
import TextInputExample from "../screens/TextInputExample";
import ScrollViewExample from "../screens/ScrollViewExample";
import ImageExample from "../screens/ImageExample";
import PickerExample from "../screens/PickerExample";

export const drawerScreenList = [
  {
    id: 1,
    name: "Principal",
    component: Main,
    label: "Principal",
    iconName: "home",
  },
  {
    id: 2,
    name: "Listado",
    component: ListExample,
    label: "Lista",
    iconName: "list-outline",
  },
  {
    id: 3,
    name: "Entrada de Textos",
    component: TextInputExample,
    label: "Textos",
    iconName: "document-text-outline",
  },
  {
    id: 4,
    name: "Desplazar Listado",
    component: ScrollViewExample,
    label: "Mover Vertical",
    iconName: "receipt-outline",
  },
  {
    id: 5,
    name: "Imagen",
    component: ImageExample,
    label: "Imagen",
    iconName: "image-outline",
  },
  {
    id: 6,
    name: "Picker",
    component: PickerExample,
    label: "Picker",
    iconName: "film-outline",
  },
];
```
ImageExample.js: Manejo de Imagen y estilos (a manera de ejemplo)
```
import { Image, StyleSheet, Text, View } from "react-native";

const ImageExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/image.png")}
          style={styles.imageHeader}
        />
        <Text style={styles.textHeader}>Montaña Lunar</Text>
      </View>
      <View style={styles.imageView}>
        <Image
          source={require("../../assets/images/mountain.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>wlopera @2024</Text>
      </View>
    </View>
  );
};

export default ImageExample;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column",
    justifyContent:"space-between"
  },
  header: {
    alignItems: "center",
    backgroundColor: "red",
    flexDirection: "row",
  },
  imageHeader: {
    margin: 5,
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  textHeader: {
    fontSize: 24,
    textAlign: "center",
    paddingLeft: 20
  },
  imageView: {
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 16,
    marginRight: 15,
    marginTop:60,
    marginBottom:120
  },
  image: {
    width: "100%",
    height: "100%",
  },
  footer: {
    justifyContent: "center",
    backgroundColor: "#14ea7f",
  },
  textFooter: {
    fontSize: 20,
    textAlign: "center",
  },
});
```
