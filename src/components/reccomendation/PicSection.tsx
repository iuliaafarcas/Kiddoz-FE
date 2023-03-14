import { Grid, Box } from "@mui/material";
import volei from "../../assets/volei.jpg";

const PicSection = () => {
  return (
    <>
      <Grid
        sx={{
          width: "500px",
          height: "300px",
          backgroundColor: "white",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "500px",
            height: "300px",
            borderRadius: "20px",
            marginTop: "15px",
          }}
          src={volei}
        />
      </Grid>
    </>
  );
};
export default PicSection;
