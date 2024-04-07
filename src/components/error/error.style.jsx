import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const style = StyleSheet.create({
  container: {
    height: 50,
    width: width - 48,
    borderColor: "red",
    borderWidth: 2,
    justifyContent: "center",
    paddingLeft: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text: {
    color: "red",
    fontSize: 15,
  },
});
