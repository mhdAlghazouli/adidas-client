import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;

export const style = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  input: {
    height: 50,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: width - 48,
    fontSize: 15,
  },
});
