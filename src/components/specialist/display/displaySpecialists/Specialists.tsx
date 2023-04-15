import { Grid, Pagination } from "@mui/material";
import DomainFilter from "./filters/DomainFilter";
import SpecialistCard from "./SpecialistCard";
import { useCallback, useEffect, useState } from "react";
import SpecialistService from "../../../../api/SpecialistService";
import { SpecialistContextProvider } from "../../../context/SpecialistContext";
import SpecialistInterface from "../../../../interfaces/SpecialistInterface";

const Specialists = () => {
  const [specialists, setSpecialists] = useState<SpecialistInterface[]>();

  const fetchSpecialists = useCallback(async () => {
    try {
      const response = await SpecialistService.getSpecialistsPaged(page);
      setSpecialists(response.data[1]);
      setNoSpecialists(response.data[0]);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const [page, setPage] = useState(1);
  const [noSpecialists, setNoSpecialists] = useState(0);
  const [noPages, setNoPages] = useState(0);
  const noItemsPerPage = 10;
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  useEffect(() => {
    fetchSpecialists();
    setNoPages(
      noSpecialists % noItemsPerPage === 0
        ? Math.floor(noSpecialists / noItemsPerPage)
        : Math.floor(noSpecialists / noItemsPerPage) + 1
    );
  }, [page, noSpecialists]);
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
        <DomainFilter />
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
          sx={{
            width: "1000px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {specialists?.map((specialist: any) => {
            return (
              <SpecialistContextProvider value={specialist} key={specialist.id}>
                <SpecialistCard />
              </SpecialistContextProvider>
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
    </Grid>
  );
};
export default Specialists;
