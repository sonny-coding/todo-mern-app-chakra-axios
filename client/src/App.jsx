import { useEffect, useState } from "react";
import { Box, Heading, Center, Flex, VStack } from "@chakra-ui/react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import axios from "axios";
const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("hello");
  const [refresh, setRefresh] = useState(false);

  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/todos");
      setTodoList(response.data.data.reverse());
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
      <Center my={2}>
        <Heading size="md">Todo App ✏️</Heading>
      </Center>
      <VStack align="center">
        <TodoForm
          textInput={textInput}
          setTextInput={setTextInput}
          setRefresh={setRefresh}
        />
        <TodoList todoList={todoList} setRefresh={setRefresh} />
      </VStack>
    </Box>
  );
};

export default App;
