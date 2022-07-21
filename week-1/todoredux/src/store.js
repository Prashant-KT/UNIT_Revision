import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./Counter/counterReducer";
import { todoReducer } from "./Todo/todoReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  count: counterReducer,
  allTodo: todoReducer,
});

// const middleware = (store) =>(next) =>(action) =>{
//   let res = store.getState().count.count
//      if(typeof action === "function"){
//       return action(store.dispatch)
//      }
//      next(action);
// }


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// export const store = legacy_createStore(rootReducer,applyMiddleware(middleware));
// export const store = legacy_createStore(rootReducer);