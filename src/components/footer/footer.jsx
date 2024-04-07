import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { style } from "./footer.style";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export const Footer = ({ userId, gender }) => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="home-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Favorite", { userId, gender })}
        >
          <Icon name="heart-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Bag", { userId, gender })}
        >
          <Icon name="bag-outline" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
