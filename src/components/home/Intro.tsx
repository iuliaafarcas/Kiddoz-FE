import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Card, CardContent, CardHeader } from "@mui/material";
import {
  Settings as SettingsIcon,
  Bolt as BoltIcon,
  Star as StarIcon,
} from "@mui/icons-material";
import { styled } from "@mui/system";

const Root = styled("section")({
  padding: "32px",
});

const StyledCard = styled(Card)({
  height: "100%",
});

const Icon = styled("div")({
  fontSize: "64px",
});

const FooterButton = styled("button")({
  marginTop: "16px",
  variant: "contained",
});

const IntroSection = () => {
  return (
    <Root>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <StyledCard sx={{ backgroundColor: "#F4A261" }}>
              <CardHeader
                // avatar={
                //   <Icon>
                //     <SettingsIcon />
                //   </Icon>
                // }
                title={
                  <Typography
                    sx={{
                      fontFamily: "Arial",
                      color: "black",
                      textAlign: "center",
                      fontSize: "24px",
                    }}
                  >
                    <b>Are you a parent?</b>
                  </Typography>
                }
              />
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", fontFamily: "Arial" }}
                >
                  Unlock your child's full potential and gain access to expert
                  insights and evidence-based strategies to help you navigate
                  the joys and challenges of parenting
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard sx={{ backgroundColor: "#e9c46a" }}>
              <CardHeader
                // avatar={
                //   <Icon>
                //     <BoltIcon />
                //   </Icon>
                // }
                title={
                  <Typography
                    sx={{
                      // fontFamily: "Cairoli Now Heavy",
                      fontFamily: "Arial",
                      color: "black",
                      textAlign: "center",
                      fontSize: "24px",
                      lineHeight: 1.1,
                      // lineHeight: 1.1;
                    }}
                  >
                    <b>Are you curious about child development?</b>
                  </Typography>
                }
              />
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", fontFamily: "Arial" }}
                >
                  Unleash your curiosity with expert insights - based
                  recommendations, perfect for educators, caregivers, and anyone
                  passionate about helping children thrive!
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard sx={{ backgroundColor: "#E76F51" }}>
              <CardHeader
                // avatar={
                //   <Icon>
                //     <StarIcon />
                //   </Icon>
                // }
                title={
                  <Typography
                    sx={{
                      fontFamily: "Arial",
                      // fontFamily: "Cairoli Now Heavy",
                      color: "black",
                      textAlign: "center",
                      fontSize: "24px",
                    }}
                  >
                    <b>Are you an expert?</b>
                  </Typography>
                }
              />
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", fontFamily: "Arial" }}
                >
                  Join our community of child development experts and share your
                  knowledge with parents worldwide, while showcasing your
                  expertise and boosting your professional profile!
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export default IntroSection;
