import { Grid } from "@mui/material";
import AboutMe from "./AboutMe";
import InterestsSection from "./InterestsSection";

const Specialist = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "1250px",
        height: "1000px",
        marginLeft: "120px",
      }}
    >
      <AboutMe />
      <InterestsSection />
    </Grid>
  );
};
export default Specialist;
