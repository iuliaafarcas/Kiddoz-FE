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
import { MyContext } from "../../context/RecommendationFilterContext";
import { childPhases } from "../../../interfaces/AgeIntervals";
import { AgeUnitEnum } from "../../../interfaces/AgeUnitEnum";

const AgeFilter = () => {
  const { setFromAgeFilter, setToAgeFilter, setAgeUnitFilter } =
    useContext(MyContext);
  const ages = childPhases;

  const handleChange = (element: any) => {
    if (element === -1) {
      setFromAgeFilter(0);
      setToAgeFilter(0);
      setAgeUnitFilter(0);
    } else {
      setFromAgeFilter(element.fromAge);
      setToAgeFilter(element.toAge);
      setAgeUnitFilter(element.fromAgeUnit);
    }
  };
  const makeLabel = (fromAge: number, toAge: number, fromUnitAge: number) => {
    return fromAge + "-" + toAge + " " + AgeUnitEnum[fromUnitAge];
  };
  return (
    <>
      <Grid
        sx={{
          width: "200px",
          height: "300px",
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
              name="radio-buttons-group"
            >
              <FormControlStyled
                value={9999}
                control={<Radio />}
                label="All"
                onChange={() => handleChange(-1)}
              />
              {ages.map((element) => {
                return (
                  <FormControlStyled
                    key={element.fromAge}
                    value={makeLabel(
                      element.fromAge,
                      element.toAge,
                      element.fromAgeUnit
                    )}
                    control={<Radio />}
                    label={makeLabel(
                      element.fromAge,
                      element.toAge,
                      element.fromAgeUnit
                    )}
                    onChange={() => handleChange(element)}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default AgeFilter;
