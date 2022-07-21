
    import axios from "axios";
    export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
    export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
    export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";
    export const CHANGE_TODO_STATUS = "CHANGE_TODO_STATUS";
    export const DELETE_TODO = "DELETE_TODO";

    
    export const getTodoRequest = () =>{
        return {
            type:ADD_TODO_REQUEST
        }
    }
 
    export const getTodo = (data) => {
      return {
        type: ADD_TODO_SUCCESS,
        payload: data,
      };
    };

    export const getTodoSuccess = () =>  async(dispatch) =>{
         let r = await axios.get("http://localhost:8080/todos");
         let data = await r.data
        dispatch(getTodo(data));
    }

     export const getTodoFailure = () => {
       return {
         type: ADD_TODO_FAILURE
         ,
       };
     };

     export const changeTodoStatus = (id) => {
       return {
         type: CHANGE_TODO_STATUS,
         payload:id
       };
     };

     export const deleteTodo = (id) => {
       return {
         type: DELETE_TODO,
         payload:id
       };
     };