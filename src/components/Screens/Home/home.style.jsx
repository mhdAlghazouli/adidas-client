import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: statusBarHeight,
  },
  scrollViewOpacity: {
    position: "absolute",
    top: 160,
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: 100,
    zIndex: -3,
    opacity: 0.5,
  },
  scrollView: {
    marginBottom: 100,
  },
});
