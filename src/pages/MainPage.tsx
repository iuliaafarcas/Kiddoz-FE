import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../components/recommendations/displayRecommendations/Cards";
import Filters from "../components/recommendations/filters/Filters";
import family from "../assets/family.png";
import { MyContextProvider } from "../components/context/FilterContext";
import RecommendationService from "../api/RecommendationService";
import RecommendationInterface from "../interfaces/RecommendationInterface";
import DotSpinner from "../components/spinner/DotSpinner";

const MainPage = () => {
  const [recommendations, setRecommendations] = useState<
    RecommendationInterface[]
  >([]);
  const [page, setPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState("");
  const [noRecommendations, setNoRecommendations] = useState(0);
  const [noPages, setNoPages] = useState(0);
  const noItemsPerPage = 10;

  const fetchRecommendations = async (
    types: number[],
    fromAge: number,
    fromUnitAge: number,
    starCount: number,
    title: string
  ) => {
    try {
      const response = await RecommendationService.getRecommendationsPaged(
        page,
        types,
        fromAge,
        fromUnitAge,
        starCount,
        title
      );

      setRecommendations(response.data[1]);
      setNoRecommendations(response.data[0]);
      setNoPages(
        noRecommendations % noItemsPerPage === 0
          ? Math.floor(noRecommendations / noItemsPerPage)
          : Math.floor(noRecommendations / noItemsPerPage) + 1
      );
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <Grid sx={{ background: "#F6F6F6" }}>
      <Box sx={{ width: "100%" }} display="flex" flexDirection="row">
        <MyContextProvider>
          <Filters fetchRecommendations={fetchRecommendations} />
        </MyContextProvider>

        <Cards
          recommendations={recommendations}
          page={page}
          setPage={setPage}
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
          noPages={noPages}
        />
        <Grid
          sx={{ display: "flex", justify: "flexEnd", alignItems: "flexEnd" }}
        >
          <Box
            component="img"
            sx={{
              width: "400px",
              height: "400px",
              marginTop: "200px",
              middle: "0",
              right: 0,
              position: "fixed",
            }}
            src={family}
          />
        </Grid>
      </Box>
    </Grid>
  );
};
export default MainPage;
