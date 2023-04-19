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
            <StyledCard>
              <CardHeader
                avatar={
                  <Icon>
                    <SettingsIcon />
                  </Icon>
                }
                title="Ipsum consequat"
              />
              <CardContent>
                <Typography variant="body1">
                  Nisl amet dolor sit ipsum veroeros sed blandit consequat
                  veroeros et magna tempus.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardHeader
                avatar={
                  <Icon>
                    <BoltIcon />
                  </Icon>
                }
                title="Magna etiam dolor"
              />
              <CardContent>
                <Typography variant="body1">
                  Nisl amet dolor sit ipsum veroeros sed blandit consequat
                  veroeros et magna tempus.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard>
              <CardHeader
                avatar={
                  <Icon>
                    <StarIcon />
                  </Icon>
                }
                title="Tempus adipiscing"
              />
              <CardContent>
                <Typography variant="body1">
                  Nisl amet dolor sit ipsum veroeros sed blandit consequat
                  veroeros et magna tempus.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
        <footer>
          <FooterButton color="primary">Get Started</FooterButton>
        </footer>
      </Container>
    </Root>
  );
};

export default IntroSection;
