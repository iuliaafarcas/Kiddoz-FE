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

const Cards = () => {
  const [recommendations, setRecommendations] =
    useState<RecommendationInterface[]>();
  const [page, setPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState("");
  const [noRecommendations, setNoRecommendations] = useState(0);
  const [noPages, setNoPages] = useState(0);
  const noItemsPerPage = 1;
  const [
    hasFetchedRecommendationsByTitle,
    setHasFetchedRecommendationsByTitle,
  ] = useState(false);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  const handleClick = () => {
    // window.scrollTo(0, 0);
    if (searchTitle === "") setPage(1);
    fetchRecommendationsByTitle();
  };

  const fetchRecommendationsByTitle = async () => {
    try {
      const response = await RecommendationService.getRecommendationsByTitle(
        page,
        searchTitle
      );
      setRecommendations(response.data[1]);
      setNoRecommendations(response.data[0]);
      setNoPages(
        noRecommendations % noItemsPerPage === 0
          ? Math.floor(noRecommendations / noItemsPerPage)
          : Math.floor(noRecommendations / noItemsPerPage) + 1
      );
      setHasFetchedRecommendationsByTitle(true);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClick();
    }
  };
  const fetchRecommendations = async () => {
    try {
      const response = await RecommendationService.getRecommendationsPaged(
        page
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

  useEffect(() => {
    if (searchTitle === "") {
      fetchRecommendations();
      console.log("recc");
    } else {
      fetchRecommendationsByTitle();
      console.log("searchTitle");
    }

    // Reset the flag back to false
  }, [page, noRecommendations, noItemsPerPage]);

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
