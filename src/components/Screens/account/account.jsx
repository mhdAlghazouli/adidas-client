import { View, Image } from "react-native";
import { ProductListNavbar } from "../../product-list-navbar/product-list-navbar";
import { SaveButton } from "../../save-button/save-button";
import { style } from "./account.style";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Account = ({ route }) => {
  const navigation = useNavigation();
  const { user } = route.params;

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userData");
      const refreshKey = Date.now();
      navigation.navigate("Home", { refreshKey });
    } catch (error) {
      console.error("Error clearing AsyncStorage data:", error);
    }
  };

  return (
    <View style={style.container}>
      <View>
        <ProductListNavbar category="ACCOUNT" />
      </View>
      <View style={style.imageContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1599839614778-a0ee8a16f2a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={style.image}
        />
      </View>
      <View style={style.buttonsContainer}>
        <SaveButton
          label={user ? "EDIT ACCOUNT" : "LOGIN"}
          onPress={
            user
              ? () => navigation.navigate("Update User", { user })
              : () => navigation.navigate("Login")
          }
        />

        <SaveButton
          label={user ? "LOGOUT" : "JOIN THE CLUB"}
          onPress={user ? handleLogout : () => navigation.navigate("Signup")}
        />
      </View>
    </View>
  );
};
