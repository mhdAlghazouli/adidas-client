import { View, TextInput } from "react-native";
import { style } from "./input.style";
export const Input = ({ placeholder, handleOnChange, value }) => {
  return (
    <View style={style.container}>
      <TextInput
        onChangeText={handleOnChange}
        value={value}
        style={style.input}
        placeholder={placeholder}
        placeholderTextColor="#333"
      />
    </View>
  );
};
