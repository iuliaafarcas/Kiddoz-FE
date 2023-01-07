import React, { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import AppRouter from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
function App() {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            light: "#F4A261",
            main: "#2A9D8F",
            dark: "#264653",
            contrastText: "#E76F51",
          },
          secondary: {
            light: "#ffffff",
            main: "#42a5f5",
            dark: "#000000",
            contrastText: "#000",
          },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
