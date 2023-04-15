import { Pagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import { useEffect, useState } from "react";
import { RecommendationContextProvider } from "../../context/RecommendationContext";
import RecommendationService from "../../../api/RecommendationService";
import RecommendationInterface from "../../../interfaces/RecommendationInterface";

const Cards = () => {
  const [recommendations, setRecommendations] =
    useState<RecommendationInterface[]>();
  const [page, setPage] = useState(1);
  const [noRecommendations, setNoRecommendations] = useState(0);
  const [noPages, setNoPages] = useState(0);
  const noItemsPerPage = 10;
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    // Fetch data from backend API
    const fetchRecommendations = async () => {
      try {
        const response = await RecommendationService.getRecommendationsPaged(
          page
        ); // Pass the desired page number as an argument
        setRecommendations(response.data[1]);
        setNoRecommendations(response.data[0]);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();
    setNoPages(
      noRecommendations % noItemsPerPage === 0
        ? Math.floor(noRecommendations / noItemsPerPage)
        : Math.floor(noRecommendations / noItemsPerPage) + 1
    );
  }, [noRecommendations, page]);

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
      <Grid>
        {recommendations?.map((element) => {
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
