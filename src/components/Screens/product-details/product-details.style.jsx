import { StyleSheet, Dimensions } from "react-native";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: (50 * height) / 100,
  },
  mainImage: {
    width: "100%",
    height: "90%",
  },

  colorsContainer: {
    height: "10%",
    alignItems: "flex-start",
  },
  colorImageButton: {
    marginHorizontal: 2,
    marginVertical: -15,
  },
  colorImage: {
    width: 50,
    height: 50,
  },

  detailsContainer: {
    flex: 1,
    height: (40 * height) / 100,

    flexDirection: "column",
    justifyContent: "space-around",
    alignSelf: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  type: {
    fontSize: 15,
  },
  price: {
    fontWeight: "bold",
    fontSize: 15,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  size: {
    fontWeight: "bold",
  },
  disabledSize: {
    opacity: 0.4,
  },
});
