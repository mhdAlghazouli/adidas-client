import { View, ImageBackground } from "react-native";
import { ShopNowButton } from "../shop-now-button/shop-now-button";
import { Label } from "../label/label";
import { style } from "./category-section.style";

export const CategorySection = ({ image, label, gender, user }) => {
  return (
    <View style={style.container}>
      <ImageBackground source={image} style={style.imageContainer}>
        <Label text={label} containerStyle={style.text} />
        <ShopNowButton
          label="SHOP NOW"
          containerStyle={style.button}
          category={label}
          gender={gender}
          user={user}
        />
      </ImageBackground>
    </View>
  );
};
