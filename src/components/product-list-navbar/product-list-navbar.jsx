import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./product-list-navbar.style";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export const ProductListNavbar = ({ userId, category, gender }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack({
      screen: "Favorite",
      params: { userId, category, gender },
    });
  };
  return (
    <View style={category ? style.container2 : style.container}>
      {category === "ACCOUNT" ||
      category === "LOGIN" ||
      category === "SIGN UP" ? (
        <TouchableOpacity
          style={style.accountOrLoginOrSignupArrow}
          onPress={goBack}
        >
          <Icon name="arrow-back-outline" size={25} />
        </TouchableOpacity>
      ) : null}

      {category ? (
        <View style={style.titleContainer}>
          <Text style={style.title}>{category}</Text>
        </View>
      ) : (
        <TouchableOpacity style={style.iconContainer} onPress={goBack}>
          <Icon name="arrow-back-outline" size={25} />
        </TouchableOpacity>
      )}
    </View>
  );
};
