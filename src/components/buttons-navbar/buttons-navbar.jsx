import { View, ScrollView } from "react-native";
import { CategoryButton } from "../category-button/category-button";
import { SwitchButton } from "../switch-button/switch-button";
import { style } from "./buttons-navbar.style";

export const ButtonsNavbar = ({
  onSwitchButtonClick,
  switchButtonLabel,
  categoriesData,
  handleCategoryButton,
}) => {
  return (
    <View>
      <ScrollView horizontal={true} style={style.container}>
        <View style={style.switchButtonContainer}>
          <SwitchButton
            label={switchButtonLabel}
            onClick={onSwitchButtonClick}
          />
        </View>
        <View style={style.categoryButtonsContainer}>
          {categoriesData.map((category) => (
            <CategoryButton
              key={category}
              label={category}
              onPress={() => handleCategoryButton(category)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
