import { Grid } from "@mui/material";
import {
  FormControlLabelStyled,
  TitleStyled,
  FormControlStyled,
} from "./StyledComponents";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

const AgeFilter = () => {
  return (
    <>
      <Grid
        sx={{
          width: "220px",
          height: "250px",
          borderRadius: "10px",
          background: "white",
          padingTop: "20px",
        }}
      >
        <Grid sx={{ borderTop: "40px", paddingTop: "10px" }}>
          <TitleStyled variant="h5" id="loginFormTitle">
            <b>Age</b>
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
              label={<FormControlLabelStyled>≤ 4</FormControlLabelStyled>}
            />
            <FormControlStyled
              control={<Checkbox size="small" />}
              label={
                <FormControlLabelStyled>Between 5 and 7</FormControlLabelStyled>
              }
            />
            <FormControlStyled
              control={<Checkbox size="small" />}
              label={
                <FormControlLabelStyled>
                  Between 8 and 11
                </FormControlLabelStyled>
              }
            />
            <FormControlStyled
              control={<Checkbox size="small" />}
              label={
                <FormControlLabelStyled>
                  Between 12 and 14
                </FormControlLabelStyled>
              }
            />
            <FormControlStyled
              control={<Checkbox size="small" />}
              label={<FormControlLabelStyled>15+</FormControlLabelStyled>}
            />
          </FormGroup>
        </Grid>
      </Grid>
    </>
  );
};

export default AgeFilter;
