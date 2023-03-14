import { Box, Grid } from "@mui/material";
import specialist from "../../../assets/specialist.jpg";
const PicSection = () => {
  return (
    <Grid
      sx={{
        width: "250px",
        height: "250px",
        borderRadius: "100%",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "250px",
          height: "250px",
          backgroundColor: "purple",
          borderRadius: "100%",
        }}
        src={specialist}
      />
    </Grid>
  );
};
export default PicSection;
