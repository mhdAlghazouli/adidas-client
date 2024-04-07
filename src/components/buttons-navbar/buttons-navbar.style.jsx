import { StyleSheet, Dimensions } from "react-native";
const ScreenHeight = Dimensions.get("window").height;
export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopColor: "grey",
    borderTopWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    height: (10 * ScreenHeight) / 100,
  },
  switchButtonContainer: {
    paddingRight: 50,
  },
  categoryButtonsContainer: {
    flexDirection: "row",
    marginRight: 5,
  },
});
