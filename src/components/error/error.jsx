import { View, Text } from "react-native";
import { style } from "./error.style";

export const Error = ({ text }) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        {text.fName || text.lName || text.email || text.password
          ? text.fName || text.lName || text.email || text.password
          : "error"}
      </Text>
    </View>
  );
};
