import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Style } from "./favorite-section.style";
import { ProductsData } from "../../data";

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

export const FavoriteSection = ({
  image,
  price,
  name,
  handleDelete,
  gender,
  category,
  id,
  user,
}) => {
  const navigation = useNavigation();
  const [images, setImages] = useState([]);
  const [sizes, setSizes] = useState([]);
  const userId = user.userId;

  const handleClick = (id, category, gender) => {
    navigation.navigate("Product Details", {
      images,
      name,
      price,
      category,
      gender,
      sizes,
      id,
      userId,
    });
  };

  const loadProductDetails = (id, category, gender) => {
    if (gender === "MEN") {
      if (category === "PANTS") {
        const selectedPants = MenProducts.pants.find((el) => el.id === id);
        setImages(selectedPants.IMAGES);
        setSizes(selectedPants.SIZES);
      } else if (category === "T-SHIRTS") {
        const selectedTshirt = MenProducts.tshirts.find((el) => el.id === id);
        setImages(selectedTshirt.IMAGES);
        setSizes(selectedTshirt.SIZES);
      } else {
        const selectedShoes = MenProducts.shoes.find((el) => el.id === id);
        setImages(selectedShoes.IMAGES);
        setSizes(selectedShoes.SIZES);
      }
    } else {
      if (category === "PANTS") {
        const selectedPants = WomenProducts.pants.find((el) => el.id === id);
        setImages(selectedPants.IMAGES);
        setSizes(selectedPants.SIZES);
      } else if (category === "T-SHIRTS") {
        const selectedTshirt = WomenProducts.tshirts.find((el) => el.id === id);
        setImages(selectedTshirt.IMAGES);
        setSizes(selectedTshirt.SIZES);
      } else {
        const selectedShoes = WomenProducts.shoes.find((el) => el.id === id);
        setImages(selectedShoes.IMAGES);
        setSizes(selectedShoes.SIZES);
      }
    }
  };

  useEffect(() => {
    loadProductDetails(id, category, gender);
  }, [id, category, gender]);

  return (
    <View style={Style.container}>
      <TouchableOpacity style={Style.deleteButton} onPress={handleDelete}>
        <Icon name="trash-outline" size={20} />
      </TouchableOpacity>

      <View style={Style.imageContainer}>
        <Image source={{ uri: image }} style={Style.image} />
      </View>
      <View style={Style.textsContainer}>
        <View style={Style.priceContainer}>
          <Text style={Style.priceText}>PRICE: </Text>
          <Text style={Style.priceNumber}>$ {price}.00</Text>
        </View>
        <Text style={Style.name}>{name}</Text>
        <TouchableOpacity
          style={Style.detailsButtonContainer}
          onPress={() => handleClick(id, category, gender)}
        >
          <Text style={Style.seeDetailsText}>SEE DETAILS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
