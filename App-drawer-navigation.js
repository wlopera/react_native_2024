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
