// Simple Todo App using Chakra UI and React Icons
import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, VStack, Heading, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      if (input.trim() !== "" && deadline.trim() !== "") {
        setTodos([...todos, { task: input, deadline }]);
        setInput("");
        setDeadline("");
      }
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <VStack p={4}>
      <Heading mb="8">Todo App</Heading>
      <Box>
        <Input placeholder="Add a new task" value={input} onChange={(e) => setInput(e.target.value)} />
        <Input placeholder="Deadline (YYYY-MM-DD)" value={deadline} onChange={(e) => setDeadline(e.target.value)} size="sm" width="auto" ml={2} />
        <IconButton icon={<FaPlus />} ml={2} colorScheme="yellow" onClick={handleAddTodo} aria-label="Add todo" />
      </Box>
      <List spacing={3} mt={4} w="100%">
        {todos.map(({ task, deadline }, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              {task} <span style={{ color: "gray", fontSize: "smaller" }}>Due: {deadline}</span>
            </Box>
            <IconButton icon={<FaTrash />} colorScheme="yellow" onClick={() => handleDeleteTodo(index)} aria-label="Delete todo" />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
