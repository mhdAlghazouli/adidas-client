import { useEffect, useState } from "react";
import { View, FlatList, Text, Alert } from "react-native";
import { FavoriteSection } from "../../favorite-section/favorite-section";
import { ProductListNavbar } from "../../product-list-navbar/product-list-navbar";
import { Footer } from "../../footer/footer";
import { style } from "./favorite.style";

export const Favorite = ({ route }) => {
  const { userId } = route.params;
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const response = await fetch(
          `https://adidas-api.onrender.com/favoriteGet/${userId.userId}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setFavorite(data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    if (userId) {
      fetchFunc();
    }
  }, [userId]);
  const handleRemoveFromFavorite = async (id) => {
    try {
      const response = await fetch(
        `https://adidas-api.onrender.com/favoriteDelete/${id}`,
        {
          method: "DELETE",
        }
      );
      setFavorite((prevFavorites) =>
        prevFavorites.filter((item) => item.productId !== id)
      );
      Alert.alert("ITEM REMOVED FROM YOUR FAVORITE");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <ProductListNavbar category="FAVORITE" />
      {userId && favorite.length !== 0 ? (
        <FlatList
          data={favorite}
          renderItem={({ item }) => (
            <FavoriteSection
              handleDelete={() => handleRemoveFromFavorite(item.productId)}
              image={item.image}
              price={item.price}
              name={item.name}
              gender={item.gender}
              category={item.category}
              id={item.productId}
              user={userId && userId}
            />
          )}
          style={style.favoriteContainer}
        />
      ) : (
        <View>
          <Text style={style.noFavoriteText}>NOTHING IN YOUR FAVORITE</Text>
        </View>
      )}

      <Footer userId={userId && userId} />
    </View>
  );
};
