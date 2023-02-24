import { Grid } from "@mui/material";
import {
  FormControlLabelStyled,
  TitleStyled,
  FormControlStyled,
} from "./StyledComponents";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
const TypeFilter = () => {
  return (
    <>
      <Grid
        sx={{
          width: "220px",
          height: "263px",
          borderRadius: "10px",
          background: "white",
          padingTop: "20px",
          marginTop: "20px",
        }}
      >
        <Grid sx={{ borderTop: "40px", paddingTop: "10px" }}>
          <TitleStyled variant="h5" id="loginFormTitle">
            <b>Type</b>
          </TitleStyled>
        </Grid>
        <Grid sx={{ marginLeft: "20px", marginTop: "15px" }}>
          <FormGroup>
            <FormControlStyled
              control={<Checkbox size="small" />}
              label={<FormControlLabelStyled>All</FormControlLabelStyled>}
            />
            <FormControlStyled
              control={<Checkbox size="small" />}
              label={<FormControlLabelStyled>Sport</FormControlLabelStyled>}
            />
            <FormControlStyled
              control={<Checkbox size="small" />}
              label={<FormControlLabelStyled>Movie</FormControlLabelStyled>}
            />
            <FormControlStyled
              control={<Checkbox size="small" />}
              label={<FormControlLabelStyled>Book</FormControlLabelStyled>}
            />
            <FormControlStyled
              control={<Checkbox size="small" />}
              label={
                <FormControlLabelStyled>Food Recipe</FormControlLabelStyled>
              }
            />
            <FormControlStyled
              control={<Checkbox size="small" />}
              label={
                <FormControlLabelStyled>Entertainment</FormControlLabelStyled>
              }
            />
            <FormControlStyled
              control={<Checkbox size="small" />}
              label={<FormControlLabelStyled>Other</FormControlLabelStyled>}
            />
          </FormGroup>
        </Grid>
      </Grid>
    </>
  );
};
export default TypeFilter;
