import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import { getTodoRequest, getTodoSuccess } from "./action";

export const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.allTodo);
  let loading = allTodos.isLoading;

  const handleAddTodo = async () => {
    await fetch("http://localhost:8080/todos", {
      method: "POST",
      body: JSON.stringify({
        todo: text,
        status: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        dispatch(getTodoRequest());
        setText("");
      })
      .then(() => {
        setTimeout(() => {
          // getTodoSuccess(dispatch);
          dispatch(getTodoSuccess());
        }, 500);
      });
  };

  return (
    <div >
      {loading ? (
        <LoadingButton loading variant="outlined" style={{ fontSize: "28px" }}>
          Adding
        </LoadingButton>
      ) : (
        <div>
          <h3>Todos</h3>
          <TextField
            style={{ width: "470px" }}
            label=" Add your Task"
            color="secondary"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <Button
            variant="contained"
            style={{ margin: "1px", padding: "15px 30px" }}
            onClick={handleAddTodo}
          >
            ADD
          </Button>
        </div>
      )}
    </div>
  );
};
