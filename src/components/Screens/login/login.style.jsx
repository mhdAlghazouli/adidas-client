import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    marginBottom: 10,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  inputsContainer: {
    justifyContent: "flex-start",
    height: "40%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  loginButtonContainer: {
    marginTop: 50,
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 3,
  },
});
