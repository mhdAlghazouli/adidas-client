import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import { style } from "./label.style";

export const Label = ({ text, containerStyle }) => {
  return (
    <View style={[style.container, containerStyle]}>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};
