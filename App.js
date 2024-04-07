import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenNavigation } from "./src/components/Screens/navigation";
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <ScreenNavigation />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
