import { Box, Grid } from "@mui/material";
import specialist from "../../../../assets/specialist.jpg";
const PicSection = () => {
  return (
    <Box
      component="img"
      sx={{
        width: "140px",
        height: "140px",
        backgroundColor: "purple",
        borderRadius: "100%",
      }}
      src={specialist}
    />
  );
};
export default PicSection;
