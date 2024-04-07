import { Text, TouchableOpacity } from "react-native";
import { style } from "./save-button.style";
import Icon from "react-native-vector-icons/Ionicons";

export const SaveButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Text style={style.text}>{label}</Text>
      <Icon name="arrow-forward" style={style.icon} size={25} />
    </TouchableOpacity>
  );
};
