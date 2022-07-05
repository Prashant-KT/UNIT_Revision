import React from 'react'
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import {useDispatch} from 'react-redux'
import { changeTodoStatus, deleteTodo } from './action';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#b1e3f9",
  ...theme.typography.body2,
  textAlign: "center",
  width: "100px",
  padding:"10px"
}));




export const EachTodo = ({id,status,todo,ind}) => {
   
    const dispatch = useDispatch();


    const handleStatus = () => {
       axios.patch(`http://localhost:8080/todos/${id}`,{
        status: !status
       }).then(()=>{
            dispatch(changeTodoStatus(id))
       });
    };

    const handleDelete = () => {
      axios.delete(`http://localhost:8080/todos/${id}`)
        .then(() => {
          dispatch(deleteTodo(id));
        });
    };


  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
    >
      <Stack direction="row" spacing={2} >
        <Item>{ind+1}</Item>
        <Item style={{ width: "200px", textDecoration : status ? "line-through" : "none" }}>{todo}</Item>
        <Button
          onClick={handleStatus}
          style={{ background: status ? "green" : "gray", color: "white" }}
        >
          {status ? "Not Done" : " Mark Done"}
        </Button>
        <Button
          style={{ background: "#f14853", color: "white" }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Stack>
    </div>
  );
}
