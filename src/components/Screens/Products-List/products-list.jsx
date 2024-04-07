import React, { useEffect, useCallback, useState } from "react";
import { View, FlatList, Dimensions } from "react-native";
import { style } from "./product-list.style";
import { ProductListNavbar } from "../../product-list-navbar/product-list-navbar";
import { ProductSection } from "../../product-section/product-section";
import { ProductsData } from "../../../data";
import { Footer } from "../../footer/footer";
import { useIsFocused } from "@react-navigation/native";

const MenProducts = {
  pants: ProductsData.MEN[0].PANTS,
  tshirts: ProductsData.MEN[1]["T-SHIRTS"],
  shoes: ProductsData.MEN[2].SHOES,
};
const WomenProducts = {
  pants: ProductsData.WOMEN[0].PANTS,
  tshirts: ProductsData.WOMEN[1]["T-SHIRTS"],
  shoes: ProductsData.WOMEN[2].SHOES,
};

export const ProductList = ({ route }) => {
  const { category, gender, user } = route.params;
  const isFocused = useIsFocused();
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    if (isFocused) {
      setKey(Date.now());
    }
  }, [isFocused]);

  return (
    <View style={style.container}>
      <ProductListNavbar data={MenProducts.tshirts} category={category} />
      <FlatList
        key={key.toString()}
        data={
          gender === "MEN" && category === "T-SHIRTS"
            ? MenProducts.tshirts
            : gender === "MEN" && category === "PANTS"
            ? MenProducts.pants
            : gender === "MEN" && category === "SHOES"
            ? MenProducts.shoes
            : gender === "WOMEN" && category === "T-SHIRTS"
            ? WomenProducts.tshirts
            : gender === "WOMEN" && category === "PANTS"
            ? WomenProducts.pants
            : WomenProducts.shoes
        }
        numColumns={2}
        renderItem={({ item }) => (
          <ProductSection
            images={item && item.IMAGES}
            name={item && item.NAME}
            price={item && item.PRICE}
            gender={gender}
            category={category}
            id={item && item.id}
            sizes={item && item.SIZES}
            userId={user && user.userId}
            key={item && item.id}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginBottom: (Dimensions.get("window").height * 10) / 100 }}
      />
      <Footer userId={user && user} />
    </View>
  );
};
