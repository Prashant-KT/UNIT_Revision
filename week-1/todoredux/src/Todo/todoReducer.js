import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, CHANGE_TODO_STATUS, DELETE_TODO } from "./action";

const initialState = {
    todos:[],
    isLoading:false,
    isError:false,
}
export const todoReducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case ADD_TODO_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case ADD_TODO_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          todos: payload,
        };
      }

      case ADD_TODO_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }

      case CHANGE_TODO_STATUS: {
        return {
          ...state,
          todos: state.todos.map((el) => {
            return el.id === payload ? { ...el, status: !el.status } : el;
          }),
        };
      }

      case DELETE_TODO: {
        return {
          ...state,
          todos: state.todos.filter((el) => {
            return el.id !== payload ;
          }),
        };
      }

      default:
        return state;
    }
};