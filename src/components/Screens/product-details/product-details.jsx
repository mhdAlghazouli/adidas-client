import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { style } from "./product-details.style";
import { ProductListNavbar } from "../../product-list-navbar/product-list-navbar";
import { SaveButton } from "../../save-button/save-button";
import { useNavigation } from "@react-navigation/native";

export const ProductDetails = ({ route }) => {
  const { images, name, price, gender, sizes, id, category, userId } =
    route.params;
  const navigation = useNavigation();
  const [mainImage, setMainImage] = useState(
    images && images.length > 0 ? images[0] : null
  );
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleChangeImage = (image, index) => {
    setMainImage(image);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const handleAddToBag = async () => {
    if (userId !== null) {
      try {
        const response = await fetch(
          "https://adidas-api.onrender.com/bagPost",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productId: id,
              images: images,
              image: mainImage,
              name: name,
              price: price,
              category: category,
              gender: gender,
              size: selectedSize,
              quantity: quantity,
              userId: userId,
            }),
          }
        );
        const data = await response.json();
        if (data.error === "already there") {
          Alert.alert("THIS ITEM IS ALREADY IN YOUR BAG");
          navigation.goBack();
        } else {
          Alert.alert("ITEM ADDED TO YOUR BAG");
          navigation.goBack();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert("LOGIN TO ADD TO BAG");
    }
  };

  const handleAddOne = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleRemoveOne = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
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
            onChangeText={setQuantity}
            style={{
              width: "25%",
              borderWidth: 0.5,
              borderRadius: 5,
              marginLeft: 5,
              textAlign: "center",
            }}
            value={quantity.toString()}
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
          {sizes &&
            sizes.map((size, index) => (
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
        <SaveButton label="ADD TO BAG" onPress={handleAddToBag} />
      </View>
    </View>
  );
};
