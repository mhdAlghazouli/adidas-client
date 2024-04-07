import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;
const height = Dimensions.get("window").height;

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: (50 * height) / 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  buttonsContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    height: (40 * height) / 100,
    paddingBottom: statusBarHeight + statusBarHeight,
  },
});
