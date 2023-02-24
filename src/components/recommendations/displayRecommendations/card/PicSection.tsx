import { Grid, Box } from "@mui/material";
import volei from "../../../../assets/volei.jpg";

const PicSection = () => {
  return (
    <>
      <Grid
        sx={{
          width: "250px",
          height: "240px",
          borderRadius: "20px",
          marginTop: "10px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "250px",
            height: "240px",
            borderRadius: "20px",
            marginRight: "10px",
          }}
          src={volei}
        />
      </Grid>
    </>
  );
};
export default PicSection;
