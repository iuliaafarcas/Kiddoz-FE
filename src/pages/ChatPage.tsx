import React from "react";
import Navbar from "../components/Navbar";
import TypeNavbar from "../components/TypeNavbar";
import History from "../components/chat/history/History";
import ChatBox from "../components/chat/chat/ChatBox";
import { Box } from "@mui/material";
import { useState } from "react";

const Chat = () => {
  const [chatPerson, setChatPerson] = useState<String>("");
  // const [historyConv, sethistoryConv] = useState<String>("");

  const handleChatPerson = (event: string) => {
    setChatPerson(event);
  };
  return (
    <>
      <Box>
        <Navbar />
        <TypeNavbar />
      </Box>
      <Box sx={{ marginTop: "150px", display: "flex", flexDirection: "row" }}>
        <History handleChatPerson={handleChatPerson} />
        <ChatBox chatPerson={chatPerson} />
      </Box>
    </>
  );
};
export default Chat;
