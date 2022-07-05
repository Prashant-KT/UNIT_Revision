import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./Counter/counterReducer";
import { todoReducer } from "./Todo/todoReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  allTodo: todoReducer,
});

export const store = legacy_createStore(rootReducer);