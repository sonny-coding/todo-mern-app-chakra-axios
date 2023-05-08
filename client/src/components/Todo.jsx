import React from "react";
import axios from "axios";
import {
  ListItem,
  Text,
  Checkbox,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const Todo = ({ task, finished, _id, setRefresh }) => {
  const handleOnChange = async () => {
    // alert("onChange");
    try {
      const newFinished = !finished;
      const response = await axios.patch(
        "http://localhost:8080/api/update-todo",
        {
          _id: _id,
          newFinished: newFinished,
        }
      );
      if (response.statusText === "OK") {
        setRefresh(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnClick = async () => {
    alert("onClick");
    try {
      const response = axios.delete("http://localhost:8080/api/delete-todo", {
        id: _id,
      });
      if (response.statusText === "OK") {
        setRefresh(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ListItem display="flex" gap={3} my={2}>
      <Flex alignItems="center" gap={1}>
        <Checkbox isChecked={finished} onChange={handleOnChange} />
        {finished ? <Text as="s">{task}</Text> : <Text>{task}</Text>}
      </Flex>
      <Spacer />
      <Button colorScheme="twitter" onClick={handleOnClick}>
        X
      </Button>
    </ListItem>
  );
};

export default Todo;
