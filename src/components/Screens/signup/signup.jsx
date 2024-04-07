import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { style } from "./signup.style";
import { Input } from "../../input/input";
import { ProductListNavbar } from "../../product-list-navbar/product-list-navbar";
import { SaveButton } from "../../save-button/save-button";
import { useNavigation } from "@react-navigation/native";

export const Signup = () => {
  const navigation = useNavigation();

  const [fName, onChangeFname] = useState("");
  const [lName, onChangeLname] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [errors, setErrors] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (fieldName, value) => {
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    switch (fieldName) {
      case "fName":
        onChangeFname(value);
        break;
      case "lName":
        onChangeLname(value);
        break;
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

  const handleSignup = async () => {
    try {
      const response = await fetch("https://adidas-api.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName: fName,
          lName: lName,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (data.message === "ok") {
        navigation.navigate("Home");
      } else {
        setErrors(data.errors);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={0} // Adjust the offset as needed
    >
      <View style={style.container}>
        <View>
          <ProductListNavbar category="SIGN UP" />
        </View>

        <View style={style.imageContainer}>
          <Image
            source={{
              uri: "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
            }}
            style={style.image}
          />
        </View>
        <ScrollView style={style.inputsContainer}>
          <Input
            placeholder="FIRST NAME"
            handleOnChange={(value) => handleInputChange("fName", value)}
            value={fName}
          />
          <Text style={style.error}>{errors.fName}</Text>
          <Input
            placeholder="LAST NAME"
            handleOnChange={(value) => handleInputChange("lName", value)}
            value={lName}
          />
          <Text style={style.error}>{errors.lName}</Text>
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
          <View style={style.buttonContainer}>
            <SaveButton label="SIGN UP" onPress={handleSignup} />
          </View>
        </ScrollView>
        <View style={style.loginButtonContainer}>
          <Text>ALREADY HAVE AN ACCOUNT ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={style.loginText}> LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
