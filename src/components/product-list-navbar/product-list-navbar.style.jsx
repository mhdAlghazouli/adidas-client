import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const style = StyleSheet.create({
  container: {
    height: (10 * height) / 100,
    width: width,
    marginTop: statusBarHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    marginLeft: 10,
  },
  titleContainer: {
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  container2: {
    height: (10 * height) / 100,
    width: width,
    marginTop: statusBarHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  accountOrLoginOrSignupArrow: {
    position: "absolute",
    left: 10,
  },
});
