import { Grid } from "@mui/material";
import { FormControlLabelStyled, FormControlStyled } from "./StyledComponents";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
const TypeFilter = () => {
  return (
    <>
      <Grid
        sx={{
          width: "200px",
          height: "255px",
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
            <b>Type</b>
          </Grid>
        </Grid>
        <Grid sx={{ marginLeft: "10px", marginTop: "15px" }}>
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
