import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Container,
  ListItemIcon,
} from "@mui/material";
import { FaCircle } from "react-icons/fa";
const MyBulletListComponent = ({ items }: any) => {
  return (
    <Container>
      <List>
        {items.map((item: any, index: any) => (
          <ListItem key={index} sx={{ maxWidth: "600px" }}>
            <ListItemIcon>
              <FaCircle style={{ fontSize: "8px", color: "black" }} />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MyBulletListComponent;
