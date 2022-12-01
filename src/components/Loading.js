import React from "react";
import { Container, makeStyles, Box, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import animationData from "../lotties/robot-bot-3d.json";
// ./lotties/kiss-of-the-heart";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
}));

function Loading() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Box className={classes.textContainer}>
        <Typography variant="h4">
          Our bots are searching the racks for you!
        </Typography>
        <Lottie options={defaultOptions} height={300} width={300} />
      </Box>
    </Container>
  );
}

export default Loading;
