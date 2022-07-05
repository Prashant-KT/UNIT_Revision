export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const incrementAction = () =>{
    return {
        type:INCREMENT,
        payload:2
    }
}

export const decrementAction = () => {
  return {
    type: DECREMENT,
    payload: 1,
  };
};