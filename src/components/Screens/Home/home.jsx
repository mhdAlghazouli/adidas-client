import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Footer } from "../../footer/footer";
import { MainNavbar } from "../../main-navbar/main-navbar";
import { ButtonsNavbar } from "../../buttons-navbar/buttons-navbar";
import { CategorySection } from "../../category-section/category-section";
import { FilterByCategory } from "../../filter-by-category/filter-by-category";
import { style } from "./home.style";
import { ProductsData } from "../../../data";
import AsyncStorage from "@react-native-async-storage/async-storage";

const menImages = [
  {
    pant: ProductsData.MEN[0].PANTS[0].IMAGES[0],
    tshirt: ProductsData.MEN[1]["T-SHIRTS"][0].IMAGES[0],
    shoe: ProductsData.MEN[2].SHOES[0].IMAGES[0],
  },
];

const womenImages = [
  {
    pant: ProductsData.WOMEN[0].PANTS[0].IMAGES[0],
    tshirt: ProductsData.WOMEN[1]["T-SHIRTS"][0].IMAGES[0],
    shoe: ProductsData.WOMEN[2].SHOES[0].IMAGES[0],
  },
];

const categories = ["PANTS", "T-SHIRTS", "SHOES"];

export const Home = ({ route }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("MEN");
  const [switchButtonLabel, setSwitchButtonLabel] = useState("MEN");
  const [newCategories, setNewCategories] = useState(categories);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData !== null) {
          setUser(JSON.parse(userData));
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error retrieving user data from AsyncStorage:", error);
      }
    };

    fetchUserData();
  }, [route.params]);

  useEffect(() => {
    if (route.params && route.params.user) {
      setUser(route.params.user);
      console.log("User information:", route.params.user);
    }
  }, [route.params]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseClick = () => {
    setShowFilter(false);
  };

  const updateSwitchButtonLabel = (label) => {
    setSwitchButtonLabel(label);
    setSelectedCategory(label);
    setShowFilter(false);
  };
  const handleSwitchButtonClick = () => {
    setShowFilter(true);
  };

  const handleCategoryButton = (category) => {
    const updatedCategories = [...newCategories];
    const index = updatedCategories.indexOf(category);
    if (index !== -1) {
      updatedCategories.splice(index, 1);
      updatedCategories.unshift(category);
      setNewCategories(updatedCategories);
    }
  };

  return (
    <View style={style.container}>
      <MainNavbar user={user && user} />

      <ButtonsNavbar
        onSwitchButtonClick={handleSwitchButtonClick}
        switchButtonLabel={switchButtonLabel}
        categoriesData={newCategories}
        handleCategoryButton={handleCategoryButton}
      />
      <FlatList
        data={switchButtonLabel === "MEN" ? menImages : womenImages}
        renderItem={(item) => (
          <View>
            {newCategories.map((category) => (
              <CategorySection
                key={category}
                user={user ? user : null}
                image={
                  category === "PANTS"
                    ? { uri: item.item.pant }
                    : category === "T-SHIRTS"
                    ? { uri: item.item.tshirt }
                    : { uri: item.item.shoe }
                }
                label={category}
                gender={selectedCategory}
              />
            ))}
          </View>
        )}
        keyExtractor={(index) => index.toString()}
        style={[
          showFilter && showFilter ? style.scrollViewOpacity : style.scrollView,
        ]}
      />

      {showFilter && (
        <FilterByCategory
          onCategoryChange={handleCategoryChange}
          onCloseClick={handleCloseClick}
          label={selectedCategory}
          onUpdateLabel={updateSwitchButtonLabel}
        />
      )}

      {!showFilter ? (
        <Footer
          userId={user && user}
          gender={selectedCategory && selectedCategory}
        />
      ) : null}
    </View>
  );
};
