import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./filter-by-category.style";
import Icon from "react-native-vector-icons/Ionicons";
import { SaveButton } from "../save-button/save-button";

export const FilterByCategory = ({ label, onCloseClick, onUpdateLabel }) => {
  const [selectedValue, setSelectedValue] = useState(label);
  const handleChangeCategory = (category) => {
    setSelectedValue(category);
  };

  const handleSave = () => {
    onUpdateLabel(selectedValue);
  };

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.titleText}>FILTER BY CATEGORY</Text>
        <TouchableOpacity onPress={onCloseClick}>
          <Icon name="close-outline" style={{}} size={30} />
        </TouchableOpacity>
      </View>
      <Picker
        selectedValue={selectedValue && selectedValue}
        onValueChange={(itemValue) => handleChangeCategory(itemValue)}
        style={style.pickerContainer}
      >
        <Picker.Item label="MEN" value="MEN" />
        <Picker.Item label="WOMEN" value="WOMEN" />
      </Picker>
      <View style={style.saveButtonContainer}>
        <SaveButton
          label="SAVE"
          onPress={handleSave}
          selectedValue={selectedValue}
        />
      </View>
    </View>
  );
};
