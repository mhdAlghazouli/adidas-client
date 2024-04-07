import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { style } from "./product-section.style";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export const ProductSection = ({
  images,
  name,
  price,
  gender,
  category,
  sizes,

  userId,
  id,
}) => {
  const [isFav, setIsFave] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const response = await fetch(
          `https://adidas-api.onrender.com/favorite/${userId}`
        );
        const data = await response.json();
        if (data.favorite) {
          // Check if data.favorite exists
          const isFavorite = data.favorite.some(
            (item) => item.productId === id
          );
          setIsFave(isFavorite);
        } else {
          setIsFave(false); // Set isFave to false if data.favorite is undefined
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFavoriteStatus();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://adidas-api.onrender.com/favoriteDelete/${id}`,
        {
          method: "DELETE",
        }
      );
      Alert.alert("ITEM REMOVED FROM YOUR FAVORITE");
      setIsFave(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFaveClick = async () => {
    if (userId !== null) {
      setIsFave(true);
      try {
        const response = await fetch(
          "https://adidas-api.onrender.com/favoritePost",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productId: id,
              image: images[0],
              name: name,
              price: price,
              category: category,
              gender: gender,
              userId: userId,
            }),
          }
        );
        const data = await response.json();
        Alert.alert("ITEM ADDED TO YOUR FAVORITE");
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert("LOGIN TO ADD IT TO YOUR FAVORITE");
    }
  };

  return (
    <TouchableOpacity
      style={style.container}
      onPress={() =>
        navigation.navigate("Product Details", {
          images,
          name,
          price,
          gender,
          sizes,

          id,
          category,
          userId,
        })
      }
      activeOpacity={1}
    >
      <View style={style.imageContainer}>
        <Image
          source={{
            uri: images[0],
          }}
          style={style.image}
        />

        <TouchableOpacity
          activeOpacity={1}
          style={style.heart}
          onPress={isFav ? handleDelete : handleFaveClick}
        >
          <Icon name="heart" size={25} color={isFav ? "red" : null} />
        </TouchableOpacity>
        <Text style={style.price}>${price}</Text>
      </View>

      <View style={style.detailsContainer}>
        <Text style={style.productName}>{name}</Text>
        <Text style={style.productType}>
          {gender}'S {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
