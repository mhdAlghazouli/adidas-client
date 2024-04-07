import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  favoriteContainer: {
    marginBottom: (Dimensions.get("window").height * 10) / 100,
  },
  noFavoriteText: {
    textAlign: "center",
  },
});
