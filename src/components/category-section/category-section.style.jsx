import { StyleSheet, Dimensions } from "react-native";
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

export const style = StyleSheet.create({
  container: {
    height: ScreenHeight - 200,
  },
  imageContainer: {
    height: ScreenHeight - 200,
    position: "absolute",
    width: "100%",
  },
  text: {
    color: "black",
    position: "relative",
    zIndex: 1,
    top: 10,
    left: 10,
    width: 130,
  },
  button: {
    position: "relative",
    zIndex: 1,
    bottom: -ScreenHeight + 300,
    left: ScreenWidth - 345,
  },
});
