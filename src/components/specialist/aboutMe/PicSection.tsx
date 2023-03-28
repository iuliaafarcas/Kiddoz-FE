import { Box, Grid } from "@mui/material";
import specialist from "../../../assets/specialistSquare.jpg";
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
          width: "210px",
          height: "210px",
          backgroundColor: "purple",
          borderRadius: "100%",
        }}
        src={specialist}
      />
    </Grid>
  );
};
export default PicSection;
