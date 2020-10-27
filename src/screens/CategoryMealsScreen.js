import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import NoContent from '../components/NoContent';
import { CATEGORIES } from '../Data/dummy-data';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const avalableMeals = useSelector((state) => state.meals.filteredMeals);

  const meals = avalableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (meals.length === 0) {
    return <NoContent>No meals found, maybe check your filters!</NoContent>;
  }

  return <MealList listData={meals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const category = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: category.title,
  };
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
