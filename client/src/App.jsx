import { useState } from "react";
import { Box, Heading, Center, Flex } from "@chakra-ui/react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const App = () => {
  const [hello, setHello] = useState("hi");
  return (
    <Box maxW="40rem" mx="auto" py={5} px={3} w="100%">
      <Heading size="md">Todo App ✏️</Heading>
      <Flex align="center" h="100%" justify="flex-start" direction="column">
        <TodoForm />
        <TodoList />
      </Flex>
    </Box>
  );
};

export default App;
