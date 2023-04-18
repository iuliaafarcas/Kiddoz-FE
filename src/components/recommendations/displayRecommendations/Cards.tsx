import { Button, Pagination, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import { useEffect, useState } from "react";
import { RecommendationContextProvider } from "../../context/RecommendationContext";
import RecommendationService from "../../../api/RecommendationService";
import RecommendationInterface from "../../../interfaces/RecommendationInterface";
import Searchbar from "../../Searchbar";
import Navbar from "../../Navbar";
import TypeNavbar from "../../TypeNavbar";
import { FaSearch } from "react-icons/fa";

const Cards = ({
  recommendations,
  page,
  setPage,
  searchTitle,
  setSearchTitle,
  noPages,
  fetchRecommendations,
}: any) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo(0, 0);
  };
  const handleClick = () => {
    // window.scrollTo(0, 0);
    if (searchTitle === "") setPage(1);
    fetchRecommendations();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "430px",
        marginTop: "150px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid sx={{ marginBottom: "40px" }}>
        <TextField
          id="searchbar"
          label="Search a recommendation..."
          size="small"
          variant="outlined"
          sx={{
            width: "600px",
            height: "40px",
          }}
          inputProps={{ style: { height: "23px" } }}
          onKeyDown={handleKeyDown}
          onChange={(event) => setSearchTitle(event.target.value)}
          autoComplete="off"
        />

        <Button
          sx={{
            width: "40px",
            height: "40px",

            marginLeft: "-5px",
            boxShadow: 0,
            borderRadius: 0,
          }}
          variant="contained"
          onClick={handleClick}
        >
          <FaSearch style={{ color: "white" }} />
        </Button>
      </Grid>
      <Grid>
        {recommendations?.map((element: any) => {
          return (
            <RecommendationContextProvider value={element} key={element.id}>
              <Card />
            </RecommendationContextProvider>
          );
        })}
      </Grid>
      <Grid sx={{ alignContent: "center", marginBottom: "30px" }}>
        <Pagination
          count={noPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Grid>
    </Grid>
  );
};
export default Cards;
