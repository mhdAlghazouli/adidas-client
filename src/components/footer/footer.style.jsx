import { StyleSheet, Dimensions } from "react-native";
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

export const style = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: ScreenWidth,
    height: (10 * ScreenHeight) / 100,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
