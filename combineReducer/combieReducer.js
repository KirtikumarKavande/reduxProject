import { combineReducers, createStore } from "redux";
const todoReducer = (state={}, action) => {
    return state
};

const userReducer = (user=[], action) => {
  if (action.type === "ADD_ITEM") {
    return [...user,{ name: action.name }];
  }
  return user;
};


const combineReducer = combineReducers({todo:todoReducer, user:userReducer});
const store = createStore(combineReducer);
console.log(store.getState());

store.dispatch({ type: "ADD_ITEM", name: "go gym" });
console.log(store.getState());
