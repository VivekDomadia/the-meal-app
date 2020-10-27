import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FilterScreen";

import colors from "../constant/colors";
import { createDrawerNavigator } from "react-navigation-drawer";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
  },
  headerTitleStyle: { fontFamily: "open-sans-bold" },
  headerBackTitleStyle: { fontFamily: "open-sans" },
  headerTintColor: Platform.OS === "android" ? "white" : colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: { headerTitle: "Meals Categories" },
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorite: FavoritesScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: colors.primaryColor,
    },
  },
  Favorite: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
          activeTintColor: colors.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filter: FilterScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: "Meals" },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
