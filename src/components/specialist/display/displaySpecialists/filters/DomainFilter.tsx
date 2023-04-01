import { Grid, TextField, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import Stars from "./Stars";

const DomainFilter = () => {
  const domains = [
    "Dermatology",
    "Kinetotherapy",
    "Neonatology",
    "Nutrition",
    "Pediatrics",
    "Dentistry",
    "Psychology",
  ];
  const noStars = [1, 2, 3, 4, 5];
  return (
    <>
      <Grid
        sx={{
          height: "600px",
          width: "230px",
          borderRadius: "10px",
          backgroundColor: "white",
          padingTop: "20px",
          overflowY: "scroll",
        }}
      >
        <Grid
          sx={{
            borderTop: "40px",
            paddingTop: "10px",
            boxShadow: 3,
            borderRadius: "12px",
          }}
        >
          <Grid
            sx={{
              height: "30px",
              width: "90%",
              borderColor: "black",
              border: 1,
              marginBottom: "10px",
              paddingLeft: "10px",
              display: "flex",
              flexDirection: "row",
              color: "white",
              backgroundColor: "#264653",
            }}
          >
            <b>Category</b>
          </Grid>

          <Grid>
            {domains.map((element) => {
              if (element !== "Psychology")
                return (
                  <Button
                    key={element}
                    variant="contained"
                    sx={{
                      color: "#264653",
                      width: "90%",
                      backgroundColor: "white",
                      textTransform: "unset",
                      boxShadow: 0,
                      justifyContent: "flex-start",
                      borderRadius: "0px",
                      ":hover": {
                        color: "white",
                      },
                    }}
                  >
                    {element}
                  </Button>
                );
              else {
                return (
                  <Button
                    key={"domain" + element}
                    variant="contained"
                    sx={{
                      color: "#264653",
                      width: "90%",
                      backgroundColor: "white",
                      textTransform: "unset",
                      boxShadow: 0,
                      justifyContent: "flex-start",
                      borderRadius: "0px",
                      ":hover": {
                        color: "white",
                      },
                    }}
                  >
                    {element}
                  </Button>
                );
              }
            })}
          </Grid>
          <Grid sx={{ backgroundColor: "white", marginTop: "20px" }}>
            <Grid
              sx={{
                height: "30px",
                width: "90%",
                borderColor: "black",
                border: 1,
                marginBottom: "10px",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "row",
                color: "white",
                backgroundColor: "#264653",
              }}
            >
              <b>Starting rating</b>
            </Grid>

            <Grid
              sx={{
                width: "250px",
                height: "230px",
                marginTop: "15px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {noStars.map((element) => {
                return (
                  <Grid
                    key={"arr" + element.toString()}
                    sx={{
                      height: "30px",
                      width: "75%",
                      borderColor: "black",
                      border: 1,
                      marginBottom: "10px",
                      paddingLeft: "10px",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Grid sx={{ width: "20px", height: "20px" }}>
                      {element}
                    </Grid>
                    <Grid>{Stars(element)}</Grid>
                  </Grid>
                );
              })}
            </Grid>

            <Grid
              sx={{
                backgroundColor: "white",
                width: "200px",
                height: "250px",
              }}
            >
              <Grid
                sx={{
                  height: "30px",
                  width: "90%",
                  borderColor: "black",
                  border: 1,
                  marginBottom: "10px",
                  paddingLeft: "10px",
                  display: "flex",
                  flexDirection: "row",
                  color: "white",
                  backgroundColor: "#264653",
                }}
              >
                <b>Age</b>
              </Grid>

              <Grid
                sx={{
                  width: "250px",
                  height: "100px",
                  marginTop: "15px",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "20px",
                    heigth: "20px",
                  }}
                >
                  <Typography>Minimum age: </Typography>
                  <TextField
                    type="number"
                    inputProps={{
                      style: {
                        height: "30px",
                        padding: "1px",
                      },
                    }}
                    sx={{ width: "40px", marginLeft: "35px" }}
                  ></TextField>
                </Grid>

                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "20px",
                    heigth: "20px",
                  }}
                >
                  <Typography>Maximum age: </Typography>
                  <TextField
                    type="number"
                    inputProps={{
                      style: {
                        height: "30px",
                        padding: "1px",
                      },
                    }}
                    sx={{ width: "40px", marginLeft: "30px" }}
                  ></TextField>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DomainFilter;
