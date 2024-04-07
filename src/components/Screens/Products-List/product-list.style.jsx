import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;
const width = Dimensions.get("window").width;
export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
