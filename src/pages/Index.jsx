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
      <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={4}>
        {Array.from({ length: 30 }).map((_, day) => (
          <Box key={day} p={4} border="1px" borderColor="gray.200">
            <Heading size="xs">{day + 1}</Heading>
            {todos
              .filter((todo) => new Date(todo.deadline).getDate() === day + 1)
              .map(({ task, deadline }, index) => (
                <Box key={index}>
                  {task} <IconButton icon={<FaTrash />} size="xs" colorScheme="yellow" onClick={() => handleDeleteTodo(index)} aria-label="Delete todo" />
                </Box>
              ))}
          </Box>
        ))}
      </Box>
    </VStack>
  );
};

export default Index;
