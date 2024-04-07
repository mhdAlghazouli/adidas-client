import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Home/home";
import { Favorite } from "./favorite/favorite";
import { Bag } from "./bag/bag";
import { ProductList } from "./Products-List/products-list";
import { ProductDetails } from "./product-details/product-details";
import { Account } from "./account/account";
import { Signup } from "./signup/signup";
import { Login } from "./login/login";
import { UpdateUser } from "./update-user/update-user";
import { EditBag } from "./edit-bag/edit-bag";
const Stack = createNativeStackNavigator();

export const ScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Bag" component={Bag} />
      <Stack.Screen name="Product List" component={ProductList} />
      <Stack.Screen name="Product Details" component={ProductDetails} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Update User" component={UpdateUser} />
      <Stack.Screen name="Edit Bag" component={EditBag} />
    </Stack.Navigator>
  );
};
