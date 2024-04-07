import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "./switch-button.style";
import Icon from "react-native-vector-icons/Ionicons";

export const SwitchButton = ({ label, onClick }) => {
  return (
    <TouchableOpacity style={style.container} onPress={onClick}>
      <Text style={style.text}>
        {label && label !== undefined ? label : "MEN"}
      </Text>
      <Icon name="chevron-down" style={style.icon} size={25} />
    </TouchableOpacity>
  );
};
