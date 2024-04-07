import { Dimensions, StyleSheet } from "react-native";
const ScreenWidth = Dimensions.get("window").width;

export const style = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 500,
    borderColor: "#fff",
    borderStyle: "solid",
    backgroundColor: "#fff",
    borderWidth: 2,
    width: ScreenWidth - 100,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  icon: {
    color: "black",
  },
  shadowView: {
    borderWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
    top: 5,
    left: 5,
    width: ScreenWidth - 100,
    height: "100%",
    zIndex: -1,
  },
});
