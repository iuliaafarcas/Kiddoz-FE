import { Grid } from "@mui/material";
import SpecialistCard from "./SpecialistCard";

const Specialists = () => {
  return (
    <Grid
      sx={{
        marginTop: "150px",
        marginLeft: "130px",
        width: "1250px",
        height: "1200px",
        paddingLeft: "300px",
      }}
    >
      <SpecialistCard />
    </Grid>
  );
};
export default Specialists;
