import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "./category-button.style";
export const CategoryButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Text style={style.text}>{label}</Text>
    </TouchableOpacity>
  );
};
