import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  container: {
    height: 150,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eaeeef",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  deleteButton: {
    position: "absolute",
    top: 3,
    right: 3,
    zIndex: 10,
  },
  imageContainer: {
    width: "30%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textsContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    fontWeight: "bold",
  },
  priceNumber: {
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "#fff",
    width: 80,
    textAlign: "center",
    padding: 3,
  },
  name: {
    fontWeight: "bold",
  },
  detailsButtonContainer: {
    borderWidth: 0.5,
    borderColor: "black",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  seeDetailsText: {
    fontWeight: "bold",
  },
});
