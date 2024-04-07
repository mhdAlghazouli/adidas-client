import { StyleSheet, Dimensions } from "react-native";
const ScreenHeight = Dimensions.get("window").height;

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: (10 * ScreenHeight) / 100,
  },
  iconsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 10,
    height: "100%",
  },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    height: "100%",
  },
});
