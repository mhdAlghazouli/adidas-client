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
    backgroundColor: "#fff",
    marginBottom: 30,
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 3,
  },
  buttonContainer: {
    marginTop: 50,
    alignSelf: "center",
  },
  loginButtonContainer: {
    height: "10%",
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    fontWeight: "bold",
  },
});
