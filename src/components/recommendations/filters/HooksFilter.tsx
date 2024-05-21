import { Button, Grid, Typography } from "@mui/material";
import { FormControlLabelStyled, FormControlStyled } from "./StyledComponents";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useContext, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { populatedHooks } from "../../../interfaces/HookInterface";

const HooksFilter = () => {
  const [selectedOption, setSelectedOption] = useState<string | "">("");
  const options = populatedHooks;
  // const options = [
  //   "useActionState",
  //   "useCallback",
  //   "useContext",
  //   "useDebugValue",
  //   "useDeferredValue",
  //   "useEffect",
  //   "useId",
  //   "useImperativeHandle",
  //   "useInsertionEffect",
  //   "useLayoutEffect",
  //   "useMemo",
  //   "useOptimistic",
  //   "useReducer",
  //   "useRef",
  //   "useState",
  //   "useSyncExternalStore",
  //   "useTransition",
  // ];

  const handleButtonClick = (key: any) => {
    window.location.href = `/hook/${key}`;
  };

  return (
    <>
      <Grid
        sx={{
          width: "250px",
          background: "white",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Grid
          sx={{
            height: "40px",
            width: "100%",
            borderColor: "black",
            border: 1,
            marginBottom: "10px",
            paddingLeft: "10px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            color: "white",
            backgroundColor: "#264653",
          }}
        >
          <Typography sx={{ fontSize: "24px" }}>
            <b>Hooks</b>
          </Typography>
        </Grid>

        <Grid
          sx={{
            marginTop: "15px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {options.map((option: any, index: any) => (
            <Button
              key={index}
              value={option.title}
              sx={{
                textTransform: "none",
                justifyContent: "flex-start",
                paddingLeft: "20px",
              }}
              onClick={() => handleButtonClick(option.id)}
            >
              <Typography sx={{ color: "#264653", fontSize: "20px" }}>
                {option.title}
              </Typography>
            </Button>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default HooksFilter;
