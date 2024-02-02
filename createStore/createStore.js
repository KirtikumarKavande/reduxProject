import { createStore } from "redux";

const reducerFunc = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return [...state, { name: action.name }];
  }
 // Default case
  return state;
};

const initialState = [{ name: "apple" }, { name: "rice" }];
const response = createStore(reducerFunc, initialState);
console.log(response.getState());
response.dispatch({
   type:"ADD_ITEM",name:"banana"
})
console.log(response.getState());
