import { useState } from "react";
import { View, Text, Image } from "react-native";
import { style } from "./login.style";
import { Input } from "../../input/input";
import { ProductListNavbar } from "../../product-list-navbar/product-list-navbar";
import { SaveButton } from "../../save-button/save-button";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigation();

  const handleInputChange = (fieldName, value) => {
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    switch (fieldName) {
      case "email":
        onChangeEmail(value);
        break;
      case "password":
        onChangePassword(value);
        break;
      default:
        break;
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("https://adidas-api.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (data.message === "ok") {
        const { user, token } = data;
        const { fName, lName, email, userId } = user;

        // Store user data and token in AsyncStorage
        await AsyncStorage.setItem(
          "userData",
          JSON.stringify({ fName, lName, email, userId })
        );
        await AsyncStorage.setItem("token", token);

        // Navigate to Home screen
        navigation.navigate("Home", { user: { fName, lName, email, userId } });
      } else {
        console.log(data.errors);
        setErrors(data.errors);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <View>
        <ProductListNavbar category="LOGIN" />
      </View>
      <View style={style.imageContainer}>
        <Image
          source={{
            uri: "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
          }}
          style={style.image}
        />
      </View>
      <View style={style.inputsContainer}>
        <Input
          placeholder="EMAIL"
          handleOnChange={(value) => handleInputChange("email", value)}
          value={email}
        />
        <Text style={style.error}>{errors.email}</Text>
        <Input
          placeholder="PASSWORD"
          handleOnChange={(value) => handleInputChange("password", value)}
          value={password}
        />
        <Text style={style.error}>{errors.password}</Text>
        <View style={style.loginButtonContainer}>
          <SaveButton label="LOGIN" onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};
