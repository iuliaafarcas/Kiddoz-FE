import { Grid, Box, Typography } from "@mui/material";
import volei from "../../../assets/volei.jpg";

const Card = () => {
  return (
    <Grid
      sx={{
        width: "200px",
        height: "220px",
        borderRadius: "20px",
        marginRight: "15px",
        boxShadow: "3",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Grid
        sx={{
          width: "130px",
          height: "150px",
          marginBottom: "5px",
          backgroundColor: "white",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "130px",
            height: "120px",
            borderRadius: "20px",
          }}
          src={volei}
        />
      </Grid>
      <Typography sx={{ fontSize: "17px" }}>
        <b>Volley</b>
      </Typography>

      <Typography sx={{ fontSize: "14px" }}>Sport</Typography>
      <Typography>6+</Typography>
    </Grid>
  );
};
export default Card;
