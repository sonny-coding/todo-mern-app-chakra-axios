import { useEffect, useState } from "react";
import { Box, Heading, Center, Flex } from "@chakra-ui/react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import axios from "axios";
const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [refresh, setRefresh] = useState(false);

  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/todos");
      setTodoList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
    setTimeout(() => {
      setRefresh(false);
    });
  }, [refresh]);
  return (
    <Box maxW="40rem" mx="auto" py={5} px={3} w="100%">
      <Heading size="md">Todo App ✏️</Heading>
      <Flex align="center" h="100%" justify="flex-start" direction="column">
        <TodoForm />
        <TodoList todoList={todoList} setRefresh={setRefresh} />
      </Flex>
    </Box>
  );
};

export default App;
