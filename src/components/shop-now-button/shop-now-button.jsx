import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./shop-now-button.style";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export const ShopNowButton = ({
  label,
  containerStyle,
  gender,
  category,
  user,
}) => {
  const navigation = useNavigation();
  return (
    <View style={[containerStyle]}>
      <TouchableOpacity
        style={style.container}
        onPress={() =>
          navigation.navigate("Product List", { category, gender, user })
        }
        activeOpacity={1}
      >
        <Text style={style.text}>{label}</Text>
        <Icon name="arrow-forward" style={style.icon} size={25} />
      </TouchableOpacity>
      <View style={style.shadowView}></View>
    </View>
  );
};
