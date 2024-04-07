import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  noBagText: {
    textAlign: "center",
  },
  bagContainer: {
    height: Dimensions.get("window").height * 0.6,
  },
  totalAndCheckoutContainer: {
    flex: 1,
    height: Dimensions.get("window").height * 0.1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  totalContainer: {
    flexDirection: "row",
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
  },
  totalNumber: {
    fontSize: 18,
    marginLeft: 5,
  },
  checkoutText: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 5,
  },
});
