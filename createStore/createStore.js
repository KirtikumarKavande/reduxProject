import { createStore, bindActionCreators } from "redux";

const reducerFunc = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return [...state, { name: action.name, quantity: action.quantity }];
  }
  // Default case
  return state;
};
const addItem = (name, quantity) => ({
  type: "ADD_ITEM",
  name: name,
  quantity: quantity ? quantity : 1,
});
const initialState = [{ name: "apple" }, { name: "rice" }];

const response = createStore(reducerFunc, initialState);

const action = bindActionCreators({ addItem: addItem }, response.dispatch);
action.addItem("baseBall",2)
console.log(response.getState())
