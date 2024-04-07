import { useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Input } from "../../input/input";
import { ProductListNavbar } from "../../product-list-navbar/product-list-navbar";
import { SaveButton } from "../../save-button/save-button";
import { style } from "./update-user.style";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UpdateUser = ({ route }) => {
  const [email, onChangeEmail] = useState(route.params.user.email);
  const [fName, onChangeFName] = useState(route.params.user.fName);
  const [lName, onChangeLName] = useState(route.params.user.lName);
  const userId = route.params.user.userId;

  const navigation = useNavigation();

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `https://adidas-api.onrender.com/signup/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fName: fName,
            lName: lName,
            email: email,
          }),
        }
      );
      const data = await response.json();
      if (data.message === "ok") {
        const { user, token } = data;
        const { fName, lName, email, userId } = user;

        await AsyncStorage.setItem(
          "userData",
          JSON.stringify({ fName, lName, email, userId })
        );
        await AsyncStorage.setItem("token", token);

        navigation.navigate("Home", {
          user: { fName, lName, email, userId },
        });
      } else {
        console.log(data.errors);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (fieldName, value) => {
    switch (fieldName) {
      case "fName":
        onChangeFName(value);
        break;
      case "lName":
        onChangeLName(value);
        break;
      case "email":
        onChangeEmail(value);
        break;
      default:
        break;
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={0}
    >
      <View style={style.container}>
        <View>
          <ProductListNavbar category="UPDATE USER" />
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
            placeholder={route.params.user.fName}
            handleOnChange={(value) => handleInputChange("fName", value)}
          />
          <Text style={style.error}></Text>
          <Input
            placeholder={route.params.user.lName}
            handleOnChange={(value) => handleInputChange("lName", value)}
          />
          <Text style={style.error}></Text>
          <Input
            placeholder={route.params.user.email}
            handleOnChange={(value) => handleInputChange("email", value)}
          />
          <Text style={style.error}></Text>

          <View style={style.loginButtonContainer}>
            <SaveButton label="UPDATE" onPress={handleUpdate} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
