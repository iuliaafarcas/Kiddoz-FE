import { Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Stars from "./Stars";
import { SpecialistFilterContext } from "../../../../context/SpecialistFilterContext";

const DomainFilter = ({ fetchSpecialists }: any) => {
  const [maxAge, setMaxAge] = useState<number>(0);
  const [minAge, setMinAge] = useState<number>(0);
  const {
    setFromAgeFilter,
    setToAgeFilter,
    setdomainNameFilter,
    setRatingFilter,
  } = useContext(SpecialistFilterContext);

  const domains = [
    "All",
    "Dermatology",
    "Kinetotherapy",
    "Neonatology",
    "Nutrition",
    "Pediatrics",
    "Dentistry",
    "Psychology",
  ];

  const handleDomain = (element: string) => {
    if (element === "All") setdomainNameFilter("");
    else setdomainNameFilter(element);
  };
  const handleNoStars = (element: number) => {
    setRatingFilter(element);
  };
  const handleMaxAge = (event: any) => setMaxAge(event?.target.value);
  const handleMinAge = (event: any) => setMinAge(event?.target.value);
  const handleSearchClick = () => {
    setFromAgeFilter(minAge);
    setToAgeFilter(maxAge);
  };
  const handleResetClick = () => {
    setFromAgeFilter(0);
    setToAgeFilter(0);
    setMaxAge(0);
    setMinAge(0);
  };
  const noStars = [1, 2, 3, 4, 5];
  return (
    <>
      <Grid
        sx={{
          height: "620px",
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
                    onClick={() => {
                      handleDomain(element);
                    }}
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
                    onClick={() => {
                      handleDomain(element);
                    }}
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
                height: "250px",
                marginTop: "15px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid
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
                onClick={() => handleNoStars(0)}
              >
                <Grid sx={{ width: "20px", height: "20px" }}>All</Grid>
              </Grid>
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
                    onClick={() => handleNoStars(element)}
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
                  <Typography sx={{ marginLeft: "20px" }}>
                    Minimum age:{" "}
                  </Typography>
                  <TextField
                    value={minAge}
                    onChange={handleMinAge}
                    type="number"
                    inputProps={{
                      style: {
                        height: "30px",
                        padding: "1px",
                      },
                    }}
                    sx={{ width: "40px", marginLeft: "15px" }}
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
                  <Typography sx={{ marginLeft: "20px" }}>
                    Maximum age:{" "}
                  </Typography>
                  <TextField
                    value={maxAge}
                    onChange={handleMaxAge}
                    type="number"
                    inputProps={{
                      style: {
                        height: "30px",
                        padding: "1px",
                      },
                    }}
                    sx={{ width: "40px", marginLeft: "10px" }}
                  ></TextField>
                </Grid>
                <Grid sx={{ display: "flex", flexDirection: "row" }}>
                  <Button
                    onClick={handleResetClick}
                    sx={{
                      height: "30px",
                      width: "85px",
                      marginLeft: "20px",
                      textTransform: "none",
                      color: "white",
                      backgroundColor: "#E76F51",
                      variant: "contained",
                      ":hover": {
                        color: "white",
                        backgroundColor: "#E76F51",
                      },
                    }}
                  >
                    Reset age
                  </Button>
                  <Button
                    onClick={handleSearchClick}
                    sx={{
                      height: "30px",
                      width: "30px",
                      marginLeft: "10px",
                      textTransform: "none",
                      color: "white",
                      backgroundColor: "#264653",
                      variant: "contained",
                      ":hover": {
                        color: "white",
                        backgroundColor: "#264653",
                      },
                    }}
                  >
                    Search
                  </Button>
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
