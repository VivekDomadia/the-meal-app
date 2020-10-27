import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/HeaderButton";
import { CATEGORIES } from "../Data/dummy-data";

const CategoriesScreen = (props) => {
  const onSelect = (categoryId) => {
    props.navigation.navigate({
      routeName: "CategoryMeals",
      params: { categoryId },
    });
  };
  const renderCatItem = (itemData) => {
    return <CategoryGridTile category={itemData.item} onSelect={onSelect} />;
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderCatItem}
      keyExtractor={(item) => item.id}
    />
  );
};

CategoriesScreen.navigationOptions = (props) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoriesScreen;
