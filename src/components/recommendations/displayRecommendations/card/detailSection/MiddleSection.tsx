import { Grid, Typography } from "@mui/material";

const MiddleSection = () => {
  var arr = [
    "weight loss",
    "building muscle",
    "teamwork",
    "communication",
    "communication",
    "team work",
  ];

  return (
    <>
      <Grid
        sx={{
          width: "370px",
          height: "40px",
          borderRadius: "20px",
          marginTop: "5px",
          paddingRight: "15px",
          marginBottom: "7px",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "black",
            fontFamily:
              'system-ui,"Segoe UI",roboto,"Noto Sans",oxygen,ubuntu,cantarell,"Fira Sans","Droid Sans","Helvetica Neue",arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
          }}
        >
          Game played by two teams of six players each, in which an inflated
          ball is volleyed over a high net. Each team tries to ...
        </Typography>
      </Grid>
      <Grid
        sx={{ height: "50px", width: "370px" }}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
      >
        {arr.map((element) => {
          return (
            <>
              <Grid
                item
                key={element}
                sx={{
                  fontSize: "11px",
                  color: "white ",
                  height: "22px",
                  marginRight: "10px",
                  maxWidth: "100px",
                  background: "#2A9D8F",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "3px",
                  borderRadius: "20px",
                }}
              >
                {element}
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};
export default MiddleSection;
