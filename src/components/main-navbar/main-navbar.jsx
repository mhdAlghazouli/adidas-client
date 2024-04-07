import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { style } from "./main-navbar.styles";
import { useNavigation } from "@react-navigation/native";

export const MainNavbar = ({ user }) => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.logoContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {user && user ? user.fName.toUpperCase() : "DROPS"}
        </Text>
      </View>
      <View style={style.iconsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Account", { user })}
        >
          <Icon name="person-outline" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
