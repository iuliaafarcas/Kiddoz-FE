import { Grid } from "@mui/material";
import { FormControlLabelStyled, FormControlStyled } from "./StyledComponents";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useContext } from "react";
import { MyContext } from "../../context/FilterContext";

const AgeFilter = () => {
  const { ageFilter, ageUnitFilter, setAgeFilter, setAgeUnitFilter } =
    useContext(MyContext);

  return (
    <>
      <Grid
        sx={{
          width: "200px",
          height: "280px",
          background: "white",
        }}
      >
        <Grid>
          <Grid
            sx={{
              height: "30px",
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
            <b>Age</b>
          </Grid>
        </Grid>
        <Grid sx={{ marginLeft: "20px", marginTop: "15px" }}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlStyled
                value="0-3 months"
                control={<Radio />}
                label="0-3 months"
              />
              <FormControlStyled
                value="4-11 months"
                control={<Radio />}
                label="4-11 months"
              />
              <FormControlStyled
                value="1-2 years"
                control={<Radio />}
                label="1-2 years"
              />
              <FormControlStyled
                value="3-5 years"
                control={<Radio />}
                label="3-5 years"
              />
              <FormControlStyled
                value="6-13 years"
                control={<Radio />}
                label="6-13 years"
              />
              <FormControlStyled
                value="14-17 years"
                control={<Radio />}
                label="14-17 years"
              />
              <FormControlStyled
                value="18-25 years"
                control={<Radio />}
                label="18-25 years"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default AgeFilter;
