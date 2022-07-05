import React, { useEffect } from 'react'
import { AddTodo } from './AddTodo'
import { useSelector, useDispatch } from "react-redux";
import { getTodoRequest, getTodoSuccess } from './action';
import LoadingButton from "@mui/lab/LoadingButton";
import { EachTodo } from './EachTodo';

export const MainTodo = () => {

  const { todos, isLoading } = useSelector((state) => state.allTodo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoRequest())
    getTodoSuccess(dispatch);
  }, [dispatch]);
  
  return (
    <div>
      <AddTodo />
      {isLoading && todos.length > 0 ? (
        <LoadingButton loading variant="outlined" style={{ fontSize: "28px" }}>
          Adding
        </LoadingButton>
      ) : (
          todos?.map((el, ind)=>{
          return <EachTodo key={ind} ind={ind} {...el} />;
          })
      )}
    </div>
  );
}
