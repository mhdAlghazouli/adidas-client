import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 2,
    height: height / 2.5,
    flexDirection: "column",
    marginRight: 2,
    marginBottom: 5,
    borderColor: "#fff",
    borderWidth: 1,
  },
  imageContainer: {
    flex: 5,
    marginLeft: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  price: {
    borderColor: "#fff",
    borderWidth: 2,
    fontSize: 18,
    width: 80,
    textAlign: "center",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 5,
  },
  heart: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  detailsContainer: {
    marginLeft: 5,
    marginTop: 10,
  },
  productName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  productType: {
    fontSize: 12,
  },
});
