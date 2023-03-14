import { Grid } from "@mui/material";
import DetailSection from "./aboutMe/DetailSection";
import PicSection from "./aboutMe/PicSection";

const AboutMe = () => {
  return (
    <Grid
      sx={{
        marginTop: "150px",
        width: "1250px",
        height: "300px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <PicSection />
      <DetailSection />
    </Grid>
  );
};
export default AboutMe;
