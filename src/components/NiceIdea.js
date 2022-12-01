import React from "react";
import { Container, Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },

  titleText: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  image: {
    flexGrow: 1,
    height: 200,
    width: 200,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  secondPara: {
    paddingTop: theme.spacing(0.8),
  },
  centerText: {
    textAlign: "center",
  },
  infoPara: {
    paddingTop: theme.spacing(0.8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    fontStyle: "italic",
    textAlign: "center",
  },
  link: {
    color: theme.palette.common.black,
  },
}));

function NiceIdea({ query }) {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.textContainer}>
        {/* <img
          className={classes.image}
          alt=""
          src={window.location.origin + `/assets/nice_idea.svg`}
        /> */}
        <Typography variant="h5" className={classes.centerText}>
          You will need the following components to make
        </Typography>
        <Typography className={classes.titleText} variant="h3">
          {query}
        </Typography>
        <Typography variant="body1" className={classes.infoPara}>
          Every electronic project idea can be simplified if we break it down in
          three different parts: Input, Brain and Output. (
          <a
            href="https://www.banaao.co.in/electronics-projects-simplified/"
            target="__blank"
            className={classes.link}
          >
            Know More
          </a>
          )
        </Typography>
      </Box>
    </Container>
  );
}

export default NiceIdea;
