import { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { style } from "./edit-bag.style";
import { ProductListNavbar } from "../../product-list-navbar/product-list-navbar";
import { SaveButton } from "../../save-button/save-button";
import { useNavigation } from "@react-navigation/native";
const clothesSizes = ["XS", "S", "M", "L", "XL"];
const shoesSizes = ["9.5", "10", "10.5", "11", "11.5"];
export const EditBag = ({ route }) => {
  const {
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
  } = route.params;
  const [selectedSize, setSelectedSize] = useState(size);
  const [editQuantity, setEditQuantity] = useState(Number(quantity));
  const [mainImage, setMainImage] = useState(image);
  const navigation = useNavigation();
  const handleChangeImage = (image, index) => {
    setMainImage(image);
  };

  const editBag = async () => {
    try {
      const response = await fetch(
        `https://adidas-api.onrender.com/bagEdit/${bagId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: mainImage,
            size: selectedSize,
            quantity: editQuantity,
          }),
        }
      );
      const data = await response.json();

      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSizeClick = (size1) => {
    setSelectedSize(size1 === selectedSize ? size : size1);
  };

  const handleAddOne = () => {
    setEditQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveOne = () => {
    setEditQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <View style={style.container}>
      <View>
        <ProductListNavbar />
      </View>

      <View style={style.imageContainer}>
        <Image source={{ uri: mainImage }} style={style.mainImage} />

        <View style={style.colorsContainer}>
          <FlatList
            horizontal
            data={images}
            renderItem={(item, index) => (
              <TouchableOpacity
                onPress={() => handleChangeImage(item.item, item.index)}
                style={style.colorImageButton}
              >
                <Image source={{ uri: item.item }} style={style.colorImage} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View style={style.detailsContainer}>
        <Text style={style.name}>{name}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={style.price}>$ {price}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={style.price}>QUANTITY:</Text>
          <TextInput
            onChangeText={setEditQuantity}
            style={{
              width: "25%",
              borderWidth: 0.5,
              borderRadius: 5,
              marginLeft: 5,
              textAlign: "center",
            }}
            value={editQuantity.toString()}
          />
          <TouchableOpacity style={{ marginLeft: 10 }} onPress={handleAddOne}>
            <Text style={{ fontWeight: "bold" }}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={handleRemoveOne}
          >
            <Text style={{ fontWeight: "bold" }}>REMOVE</Text>
          </TouchableOpacity>
        </View>
        <View style={style.sizeContainer}>
          {category !== "SHOES"
            ? clothesSizes.map((size, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSizeClick(size)}
                  disabled={selectedSize === size}
                  activeOpacity={1}
                >
                  <Text
                    style={[
                      style.size,
                      selectedSize === size && style.disabledSize,
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))
            : shoesSizes.map((size, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSizeClick(size)}
                  disabled={selectedSize === size}
                  activeOpacity={1}
                >
                  <Text
                    style={[
                      style.size,
                      selectedSize === size && style.disabledSize,
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
        </View>

        <SaveButton label="EDIT" onPress={editBag} />
      </View>
    </View>
  );
};
