import { Grid } from "@mui/material";
import Card from "./Card";

const Cards = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <Grid
      sx={{
        height: "200px",
        width: "970px",
        marginBottom: "100px",
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {arr.map((element) => {
        return <Card key={element} />;
      })}
    </Grid>
  );
};
export default Cards;
