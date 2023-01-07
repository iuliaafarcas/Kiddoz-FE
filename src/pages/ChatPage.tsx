import React from "react";
import Navbar from "../components/Navbar";
import TypeNavbar from "../components/TypeNavbar";
import Bar from "../components/chat/bar/Bar";
import ChatBox from "../components/chat/chat/ChatBox";
import { Box } from "@mui/material";
const Chat = () => {
  return (
    <>
      <Box>
        <Navbar />
        <TypeNavbar />
      </Box>
      {/* <Bar /> */}
      <Box sx={{ marginTop: "150px" }}>
        <ChatBox />
      </Box>
    </>
  );
};
export default Chat;
