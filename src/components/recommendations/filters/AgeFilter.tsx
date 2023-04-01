import { Grid } from "@mui/material";
import { FormControlLabelStyled, FormControlStyled } from "./StyledComponents";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

const AgeFilter = () => {
  return (
    <>
      <Grid
        sx={{
          width: "200px",
          height: "230px",
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
