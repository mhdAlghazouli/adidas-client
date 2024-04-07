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
    backgroundColor: "black",
    borderWidth: 2,
    width: ScreenWidth - 48,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  icon: {
    color: "#fff",
  },
});
