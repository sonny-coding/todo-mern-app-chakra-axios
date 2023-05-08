import React from "react";
import Todo from "./Todo";
import { List } from "@chakra-ui/react";
const TodoList = ({ todoList, setRefresh }) => {
  return (
    <List>
      {todoList.map((todo) => (
        <Todo
          task={todo.task}
          finished={todo.finished}
          _id={todo._id}
          setRefresh={setRefresh}
        />
      ))}
    </List>
  );
};

export default TodoList;
