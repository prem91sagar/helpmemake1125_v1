import React from "react";

import { Container, Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleText: {
    paddingBottom: theme.spacing(2),
  },
  textContainer: {
    padding: theme.spacing(4),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  secondPara: {
    paddingTop: theme.spacing(0.8),
  },
  link: {
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
}));

function FeedbackContact() {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.textContainer}>
        <Typography className={classes.titleText} variant="h4">
          We request you to kindly submit your valuable feedback
        </Typography>
        <Typography variant="h5">
          The project is currently in beta testing stage and is undergoing
          constant improvement.{" "}
          <a
            href="https://forms.gle/DuhuaoU8kSUNjdVs8"
            target="__blank"
            className={classes.link}
          >
            Click Here
          </a>{" "}
          to support the project with your valueable feedback and suggestions.
        </Typography>
        <Typography variant="h5" className={classes.secondPara}>
          You can always reach out to us for any queries via direct message on{" "}
          <a
            href="https://www.facebook.com/banaao/"
            target="__blank"
            className={classes.link}
          >
            Facebook
          </a>
          {" & "}
          <a
            href="https://www.instagram.com/banaaonow/"
            target="__blank"
            className={classes.link}
          >
            Instagram
          </a>
          .
        </Typography>
      </Box>
    </Container>
  );
}

export default FeedbackContact;
