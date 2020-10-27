const { createStore, combineReducers } = require("redux");
const { default: mealReducer } = require("./reducer/mealReducer");

const reducer = combineReducers({
  meals: mealReducer,
});

const store = createStore(reducer);

export default store;
