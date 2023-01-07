import { Box } from "@mui/system";
import { Fragment } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
export default function Bar() {
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Fragment>
        <Box mb={4}>
          <Toolbar>
            <Box mr={2}>
              <ChatIcon fontSize={"large"} />
            </Box>
            <Typography variant="h6"> React chat app</Typography>
          </Toolbar>
        </Box>
      </Fragment>
    </Box>
  );
}
