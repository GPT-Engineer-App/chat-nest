import React, { useState } from "react";
import { Box, Container, VStack, HStack, Input, Button, Text, Avatar, IconButton } from "@chakra-ui/react";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%" justifyContent="space-between" padding={4} bg="teal.500" color="white" borderRadius="md">
          <HStack>
            <Avatar icon={<FaUserCircle />} />
            <Text fontSize="xl">Chat App</Text>
          </HStack>
        </HStack>
        <Box width="100%" flex="1" overflowY="auto" padding={4} bg="gray.100" borderRadius="md">
          {messages.map((message, index) => (
            <HStack key={index} justifyContent={message.sender === "You" ? "flex-end" : "flex-start"} marginY={2}>
              <Box bg={message.sender === "You" ? "teal.500" : "gray.300"} color={message.sender === "You" ? "white" : "black"} padding={3} borderRadius="md" maxWidth="70%">
                <Text>{message.text}</Text>
              </Box>
            </HStack>
          ))}
        </Box>
        <HStack width="100%" padding={4} bg="white" borderRadius="md" boxShadow="md">
          <Input placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} colorScheme="teal" onClick={handleSendMessage} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
