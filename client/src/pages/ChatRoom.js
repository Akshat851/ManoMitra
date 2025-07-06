import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import axios from "axios";
import {
  Box,
  TextField,
  List,
  ListItem,
  Typography,
  Paper,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Send } from "@mui/icons-material";

export const ChatRoom = () => {
  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const email = localStorage.getItem("email");

  useEffect(() => {
    const token = localStorage.getItem("Authorization");
    axios
      .get(`${process.env.REACT_APP_SERVER_PREFIX}/api/chat/history`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.error("Error fetching old chats:", err);
      });

    const socket = new SockJS(
      `${process.env.REACT_APP_SERVER_PREFIX}/ws?token=${token}`
    );
    const client = Stomp.over(socket);
    client.connect({}, () => {
      client.subscribe("/topic/messages", (msg) => {
        const message = JSON.parse(msg.body);
        setMessages((prev) => [...prev, message]);
      });
    });
    setStompClient(client);
    return () => client.disconnect();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (newMsg.trim() === "") return;
    stompClient.send("/app/send", {}, JSON.stringify({ content: newMsg }));
    setNewMsg("");
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Typography
        variant="h4"
        align="center"
        color="primary.main"
        fontWeight="bold"
        sx={{ mt: "20px" }}
      >
        Chat Room
      </Typography>
      <Box flex={1} px={2}>
        <Box
          maxWidth="800px"
          mx="auto"
          width="100%"
          display="flex"
          flexDirection="column"
        >
          <List>
            {messages.map((msg, index) => (
              <ListItem
                key={index}
                disableGutters
                sx={{
                  display: "flex",
                  justifyContent:
                    email === msg.senderEmail ? "flex-end" : "flex-start",
                }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 1.5,
                    maxWidth: "70%", // restrict bubble width
                    bgcolor:
                      email === msg.senderEmail ? "#e0f7fa" : "primary.light",
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography variant="body2" color="text.secondary">
                        {msg.sender}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body1"
                        fontWeight="medium"
                        color="primary.main"
                      >
                        {msg.content}
                      </Typography>
                    }
                  />
                </Paper>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box
        p={2}
        component="form"
        display="flex"
        position="sticky"
        bottom={0}
        zIndex={1}
        bgcolor="primary.light"
      >
        <TextField
          fullWidth
          placeholder="Type a message.."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={handleKeyPress}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
            },
            input: { color: "primary.main" },
          }}
        />
        <IconButton color="primary" onClick={sendMessage} sx={{ ml: 1 }}>
          <Send />
        </IconButton>
      </Box>
    </Box>
  );
};
