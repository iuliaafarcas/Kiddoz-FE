import { Button, Pagination, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import { useEffect, useState } from "react";
import { RecommendationContextProvider } from "../../context/RecommendationContext";
import RecommendationService from "../../../api/recommendation/RecommendationService";
import RecommendationInterface from "../../../interfaces/RecommendationInterface";
import Searchbar from "../../bar/Searchbar";
import Navbar from "../../bar/Navbar";
import TypeNavbar from "../../bar/TypeNavbar";
import { FaSearch } from "react-icons/fa";
import { MyContext } from "../../context/RecommendationFilterContext";
import { useContext } from "react";
import MyDialog from "./Formular";
const Cards = ({
  recommendations,
  page,
  setPage,
  searchTitle,
  setSearchTitle,
  noPages,
  fetchRecommendations,
}: any) => {
  const {
    typeFilter,
    fromAgeFilter,
    toAgeFilter,
    ageUnitFilter,
    ratingFilter,
    titleFilter,
    setTitleFilter,
  } = useContext(MyContext);

  const [showFormular, setShowFormular] = useState(false);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo(0, 0);
  };
  const handleClick = () => {
    setTitleFilter(searchTitle);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClick();
    }
  };
  useEffect(() => {
    fetchRecommendations(
      typeFilter,
      fromAgeFilter,
      toAgeFilter,
      ageUnitFilter,
      ratingFilter,
      titleFilter
    );
  }, [page]);

  const handleFormularClick = () => {
    setShowFormular(true);
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
          onChange={(event) => {
            setSearchTitle(event.target.value);
          }}
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
        <Button
          sx={{
            variant: "contained",
            height: "40px",
            width: "150px",
            backgroundColor: "#F4A261",
            marginLeft: "20px",
            textTransform: "none",
            color: "white",
            ":hover": {
              bgcolor: "#264653",
            },
          }}
          onClick={handleFormularClick}
        >
          Take the quiz!
        </Button>

        <MyDialog open={showFormular} onClose={() => setShowFormular(false)} />
      </Grid>
      <Grid sx={{ marginLeft: "-180px" }}>
        {recommendations.length ? (
          recommendations?.map((element: any) => {
            return (
              <RecommendationContextProvider value={element} key={element.id}>
                <Card />
              </RecommendationContextProvider>
            );
          })
        ) : (
          <Typography sx={{ marginBottom: "20px", color: "grey" }}>
            No results found
          </Typography>
        )}
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
