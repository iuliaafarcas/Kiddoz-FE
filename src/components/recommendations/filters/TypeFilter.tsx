import { Grid } from "@mui/material";
import { FormControlLabelStyled, FormControlStyled } from "./StyledComponents";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import { MyContext } from "../../context/RecommendationFilterContext";
import { TypeEnum } from "../../../interfaces/TypeEnum";

const TypeFilter = () => {
  const { typeFilter, setTypeFilter } = useContext(MyContext);

  const types = (
    Object.keys(TypeEnum).filter((v) =>
      isNaN(Number(v))
    ) as (keyof typeof TypeEnum)[]
  ).map((key, index) => {
    return TypeEnum[key];
  });
  const handleClick = (type: number) => {
    if (typeFilter.includes(type)) {
      setTypeFilter(typeFilter.filter((num) => num !== type));
    } else {
      setTypeFilter([...typeFilter, type]);
      console.log(typeFilter);
    }
  };
  return (
    <Grid
      sx={{
        width: "200px",
        height: "220px",
        background: "white",
      }}
    >
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
        <b>Type</b>
      </Grid>
      <Grid
        sx={{
          marginLeft: "10px",
          marginTop: "15px",
          paddingLeft: "10px",
        }}
      >
        <FormGroup>
          {types.map((element) => {
            return (
              <FormControlStyled
                key={element}
                control={<Checkbox size="small" />}
                label={
                  <FormControlLabelStyled>
                    {TypeEnum[element] === "FoodRecipe"
                      ? "Food recipe"
                      : TypeEnum[element]}
                  </FormControlLabelStyled>
                }
                onChange={() => handleClick(element)}
              />
            );
          })}
        </FormGroup>
      </Grid>
    </Grid>
  );
};
export default TypeFilter;
