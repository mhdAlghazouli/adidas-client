import { useState, useEffect } from "react";
import { Text, View, FlatList, Alert, TouchableOpacity } from "react-native";
import { Footer } from "../../footer/footer";
import { style } from "./bag.style";
import { BagSection } from "../../bag-section/bag-section";
import { ProductListNavbar } from "../../product-list-navbar/product-list-navbar";
import { useIsFocused } from "@react-navigation/native";

export const Bag = ({ route }) => {
  const { userId } = route.params;
  const [bagData, setBagData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => {
    const handleGetBags = async () => {
      try {
        const response = await fetch(
          `https://adidas-api.onrender.com/bagGet/${userId.userId}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setBagData(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (userId && isFocused) {
      handleGetBags();
    }
  }, [userId, isFocused]);

  useEffect(() => {
    let totalPrice = 0;
    bagData.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setTotalPrice(totalPrice);
  }, [bagData]);

  const handleRemoveFromBag = async (id) => {
    try {
      const response = await fetch(
        `https://adidas-api.onrender.com/bagDelete/${id}`,
        {
          method: "DELETE",
        }
      );
      setBagData((prevBags) =>
        prevBags.filter((item) => item.productId !== id)
      );
      Alert.alert("ITEM REMOVED FROM YOUR BAG");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <ProductListNavbar category="BAG" />

      {userId && bagData.length !== 0 ? (
        <FlatList
          data={bagData}
          renderItem={({ item }) => (
            <BagSection
              handleDelete={() => handleRemoveFromBag(item.productId)}
              bagId={item._id}
              productId={item.productId}
              images={item.images}
              image={item.image}
              name={item.name}
              price={item.price}
              category={item.category}
              gender={item.gender}
              size={item.size}
              quantity={item.quantity}
            />
          )}
          style={style.bagContainer}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <View>
          <Text style={style.noBagText}>NOTHING IN YOUR BAG</Text>
        </View>
      )}
      {userId && bagData.length !== 0 ? (
        <View style={style.totalAndCheckoutContainer}>
          <View style={style.totalContainer}>
            <Text style={style.totalText}>TOTAL:</Text>
            <Text style={style.totalNumber}>${totalPrice.toFixed(2)}</Text>
          </View>
          <TouchableOpacity onPress={() => Alert.alert("WORKING ON IT")}>
            <Text style={style.checkoutText}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <Footer userId={userId && userId} />
    </View>
  );
};
