import React from "react";
import { Button } from "@mui/material";

type ButtonComponentProps = {
  onButtonClick: () => void;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({ onButtonClick }) => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={onButtonClick}>
        Open Dialog
      </Button>
    </div>
  );
};

export default ButtonComponent;
