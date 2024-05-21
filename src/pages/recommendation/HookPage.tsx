import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Navbar from "../../components/bar/Navbar";
import TypeNavbar from "../../components/bar/TypeNavbar";
import { Grid, Typography } from "@mui/material";
import Recommendation from "../../components/reccomendation/Recommendation";
import {
  HookContext,
  HookContextModel,
  HookContextProvider,
  HookFullContextProvider,
} from "../../components/context/HookContext";
import { useParams } from "react-router-dom";
import HookInterface, { emptyHook } from "../../interfaces/HookInterface";
import { populatedHooks } from "../../interfaces/HookInterface";
import HooksFilter from "../../components/recommendations/filters/HooksFilter";
import MyBulletListComponent from "../../components/recommendations/BulletList";

const HookPage = () => {
  const [hookData, setHookData] = useState<HookInterface>(emptyHook);

  const { id } = useParams();

  useEffect(() => {
    const parsedId = parseInt(id || "", 10); // Parsează id-ul într-un număr întreg; folosește 0 dacă id-ul este undefined
    if (!isNaN(parsedId)) {
      setHookData(populatedHooks[parsedId - 1]); // Setează hookData cu obiectul asociat cu id-ul
    }
    console.log(id);
  }, [id]); // Rerenderea efectului atunci când se schimbă id-ul sau populatedHooks

  return (
    <HookFullContextProvider value={hookData} setValue={setHookData}>
      <Grid
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Navbar />
        <TypeNavbar />
        <Grid
          sx={{
            paddingTop: "150px",
            marginLeft: "120px",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#f5f5f5",
          }}
        >
          <HooksFilter />
          <Grid
            sx={{
              marginLeft: "100px",
              paddingLeft: "50px",
              paddingRight: "30px",
              paddingTop: "10px",
              backgroundColor: "white",
            }}
          >
            {id !== undefined && hookData.title !== undefined && (
              <>
                {/* <Grid></Grid> */}
                <Typography sx={{ fontSize: "40px", leftMargin: "50px" }}>
                  <b>{hookData.title}</b>
                </Typography>

                <Typography
                  sx={{
                    marginTop: "20px",
                    fontSize: "16px",
                    leftMargin: "50px",
                    backgroundColor: "rgba(42, 157, 143, 0.5)",
                    width: "600px",
                    borderRadius: "10px", // Add this line to round the corners
                    padding: "10px",
                  }}
                >
                  <b>{hookData.description}</b>
                </Typography>

                <Typography
                  sx={{
                    marginTop: "20px",
                    fontSize: "16px",
                    leftMargin: "50px",
                    backgroundColor: "#264653",
                    width: "600px",
                    borderRadius: "10px", // Add this line to round the corners
                    padding: "10px",
                    color: "white",
                  }}
                >
                  <b>{hookData.example}</b>
                </Typography>

                <Typography
                  sx={{
                    width: "600px",
                    borderRadius: "10px", // Add this line to round the corners
                    padding: "10px",
                    color: "black",
                    backgroundColor: "#ffab00",
                    marginTop: "20px",
                  }}
                >
                  <b> Reference</b>
                </Typography>
                <MyBulletListComponent items={hookData.reference} />
                <Typography
                  sx={{
                    width: "600px",
                    borderRadius: "10px", // Add this line to round the corners
                    padding: "10px",
                    color: "black",
                    backgroundColor: "#ffab00",
                  }}
                >
                  <b> Usage</b>
                </Typography>
                <MyBulletListComponent items={hookData.usage} />
                <Grid>
                  {hookData.troubleshooting.length !== 0 && (
                    <Grid>
                      <Typography
                        sx={{
                          width: "600px",
                          borderRadius: "10px", // Add this line to round the corners
                          padding: "10px",
                          color: "black",
                          backgroundColor: "#ffab00",
                        }}
                      >
                        <b> Troubleshooting</b>
                      </Typography>
                      <MyBulletListComponent items={hookData.troubleshooting} />{" "}
                    </Grid>
                  )}
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </HookFullContextProvider>
  );
};
export default HookPage;
