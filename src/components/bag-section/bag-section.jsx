import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Style } from "./bag-section.style";

export const BagSection = ({
  handleDelete,
  bagId,
  productId,
  images,
  image,
  name,
  price,
  category,
  gender,
  size,
  quantity,
}) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Edit Bag", {
      bagId,
      productId,
      images,
      image,
      name,
      price,
      category,
      gender,
      size,
      quantity,
    });
  };
  return (
    <View style={Style.container}>
      <TouchableOpacity style={Style.deleteContainer} onPress={handleDelete}>
        <Icon name="trash-outline" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        style={Style.editContainer}
        onPress={() => handleClick()}
      >
        <Icon name="create-outline" size={20} />
      </TouchableOpacity>
      <View style={Style.imageContainer}>
        <Image source={{ uri: image }} style={Style.image} />
      </View>
      <View style={Style.detailsContainer}>
        <View style={Style.priceContainer}>
          <Text style={Style.priceText}>PRICE: </Text>
          <View style={Style.priceNumberContainer}>
            <Text style={Style.priceNumber}>$ {price}.00</Text>
          </View>
        </View>
        <View>
          <Text style={Style.nameText}>{name}</Text>
        </View>
        <View style={Style.sizeContainer}>
          <Text style={Style.sizeText}>SIZE: </Text>
          <Text>{size}</Text>
        </View>
        <View style={Style.quantityContainer}>
          <Text style={Style.quantityText}>QUANTITY: </Text>
          <Text>{quantity}</Text>
        </View>
        <View style={Style.quantityContainer}>
          <Text style={Style.quantityText}>TOTAL: </Text>
          <Text>$ {Number(quantity) * Number(price)}.00</Text>
        </View>
        {/* <TouchableOpacity
          style={Style.editButtonContainer}
          onPress={() => handleClick()}
        >
          <Text style={Style.editText}>CHECKOUT</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
