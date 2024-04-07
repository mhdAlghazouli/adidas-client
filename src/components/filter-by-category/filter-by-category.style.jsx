import { StyleSheet, Dimensions } from "react-native";
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

export const style = StyleSheet.create({
  container: {
    height: ScreenHeight / 2,
    width: ScreenWidth,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    flex: 1,
  },
  pickerContainer: {
    flex: 4,
  },
  saveButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
