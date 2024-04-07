import { StyleSheet, Dimensions } from "react-native";

export const Style = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 5,
    height: 150,
    backgroundColor: "#eaeeef",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  deleteContainer: {
    position: "absolute",
    top: 7,
    right: 3,
    zIndex: 10,
  },
  editContainer: {
    position: "absolute",
    top: 7,
    right: 50,
    zIndex: 10,
  },
  imageContainer: {
    width: "30%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  detailsContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginLeft: 15,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    fontWeight: "bold",
  },
  priceNumberContainer: {
    borderColor: "black",
    borderWidth: 0.5,
    backgroundColor: "#fff",
    width: 80,
    padding: 3,
  },
  priceNumber: {
    textAlign: "center",
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 13,
  },
  sizeContainer: {
    flexDirection: "row",
  },
  sizeText: {
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
  },
  quantityText: { fontWeight: "bold" },
  editButtonContainer: {
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 5,
    padding: 7,
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  editText: {
    fontWeight: "bold",
  },
});
