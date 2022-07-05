import { DECREMENT, INCREMENT } from "./action";

const initialCounter = {
    count:0,
}

export const counterReducer = (state = initialCounter, {type,payload}) => {
    switch (type) {
      case INCREMENT: {
        return {
          ...state,
          count: state.count + payload,
        };
      }

      case DECREMENT: {
        return {
          ...state,
          count: state.count - payload,
        };
      }

      default:
        return state;
    }
};