import { Pagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "./Card";

const Cards = () => {
  const noItems = 5;
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "425px",
        marginTop: "180px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid>
        {arr.map((element) => {
          return (
            <>
              <Card />
            </>
          );
        })}
      </Grid>
      <Grid sx={{ alignContent: "center", marginBottom: "30px" }}>
        <Pagination count={5} variant="outlined" color="primary" />
      </Grid>
    </Grid>
  );
};
export default Cards;
