import { Button, Grid, Pagination, TextField, Typography } from "@mui/material";
import DomainFilter from "./filters/DomainFilter";
import SpecialistCard from "./SpecialistCard";
import { useCallback, useContext, useEffect, useState } from "react";
import SpecialistService from "../../../../api/specialist/SpecialistService";
import { SpecialistContextProvider } from "../../../context/SpecialistContext";
import SpecialistInterface from "../../../../interfaces/SpecialistInterface";
import {
  SpecialistFilterContext,
  SpecialistFilterContextProvider,
} from "../../../context/SpecialistFilterContext";
import { FaSearch } from "react-icons/fa";

const Specialists = () => {
  const {
    toAgeFilter,
    fromAgeFilter,
    nameFilter,
    ratingFilter,
    domainNameFilter,
    setNameFilter,
  } = useContext(SpecialistFilterContext);
  const [specialists, setSpecialists] = useState<SpecialistInterface[]>();
  const [page, setPage] = useState(1);
  const [noSpecialists, setNoSpecialists] = useState(0);
  const [noPages, setNoPages] = useState(0);
  const [searchName, setSearchName] = useState<string>("");
  const noItemsPerPage = 12;
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const fetchSpecialists = async (
    fromAge: number,
    toAge: number,
    name: string,
    domainName: string,
    starCount: number
  ) => {
    try {
      const response = await SpecialistService.getSpecialistsPaged(
        page,
        fromAge,
        toAge,
        name,
        domainName,
        starCount
      );
      setSpecialists(response.data[1]);
      setNoSpecialists(response.data[0]);
      setNoPages(
        noSpecialists % noItemsPerPage === 0
          ? Math.floor(noSpecialists / noItemsPerPage)
          : Math.floor(noSpecialists / noItemsPerPage) + 1
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    setNameFilter(searchName);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClick();
    }
  };
  useEffect(() => {
    fetchSpecialists(
      fromAgeFilter,
      toAgeFilter,
      nameFilter,
      domainNameFilter,
      ratingFilter
    );
  }, [
    fromAgeFilter,
    nameFilter,
    toAgeFilter,
    domainNameFilter,
    ratingFilter,
    page,
  ]);

  return (
    <Grid sx={{ display: "flex", flexDirection: "row", marginTop: "50px" }}>
      <Grid
        sx={{
          height: "200px",
          width: "250px",
          marginTop: "100px",
          marginLeft: "130px",
          position: "fixed",
        }}
      >
        <DomainFilter fetchSpecialists={fetchSpecialists} />
      </Grid>
      <Grid
        sx={{
          width: "1000px",
          minHeight: "200px",
          paddingLeft: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "300px",
          marginTop: "100px",
        }}
      >
        <Grid
          sx={{ width: "900px", marginBottom: "40px", marginLeft: "-30px" }}
        >
          <TextField
            id="searchbar"
            label="Search a specialist..."
            size="small"
            variant="outlined"
            sx={{
              width: "830px",
              height: "40px",
            }}
            inputProps={{ style: { height: "23px" } }}
            onKeyDown={handleKeyDown}
            onChange={(event) => setSearchName(event.target.value)}
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
        <Grid
          sx={{
            width: "1000px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {specialists?.length ? (
            specialists?.map((specialist: any) => {
              return (
                <SpecialistContextProvider
                  value={specialist}
                  key={specialist.id}
                >
                  <SpecialistCard />
                </SpecialistContextProvider>
              );
            })
          ) : (
            <Typography
              sx={{
                marginBottom: "20px",
                color: "grey",
              }}
            >
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
    </Grid>
  );
};
export default Specialists;
