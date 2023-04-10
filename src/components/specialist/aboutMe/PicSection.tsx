import { Box, Grid } from "@mui/material";
import specialist from "../../../assets/specialistSquare.jpg";
import {
  SpecialistContext,
  SpecialistContextModel,
} from "../../context/SpecialistContext";
import { useContext } from "react";
const PicSection = () => {
  const { specialistObject } = useContext(
    SpecialistContext
  ) as SpecialistContextModel;
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
          borderRadius: "100%",
        }}
        src={specialistObject.image}
      />
    </Grid>
  );
};
export default PicSection;
