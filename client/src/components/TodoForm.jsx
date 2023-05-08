import React from "react";
import axios from "axios";
import { Input, Button, HStack } from "@chakra-ui/react";

const TodoForm = ({ textInput, setTextInput, setRefresh }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/create-todo",
        {
          task: textInput,
        }
      );
      if (response.statusText === "OK") {
        setRefresh(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnChange = (e) => {
    setTextInput(e.target.value);
    console.log(textInput);
  };
  return (
    <form onSubmit={handleSubmit}>
      <HStack maxW="40rem">
        <Input placeholder="todo" value={textInput} onChange={handleOnChange} />
        <Button type="submit">Add</Button>
      </HStack>
    </form>
  );
};

export default TodoForm;
