import React from "react";
import { Container, Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  whyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    paddingBottom: theme.spacing(2),
  },
  image: {
    flexGrow: 1,
    height: "100%",
    width: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  textContainer: {
    maxWidth: "60%",
    padding: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      padding: theme.spacing(2),
    },
  },
  secondPara: {
    paddingTop: theme.spacing(0.8),
  },
  feedbackPara: {
    paddingTop: theme.spacing(0.8),
    fontStyle: "italic",
  },
  link: {
    color: theme.palette.common.black,
  },
}));

function About() {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.whyContainer}>
        <img
          className={classes.image}
          alt=""
          src={window.location.origin + `/assets/idea.svg`}
        />
        <Box className={classes.textContainer}>
          <Typography className={classes.titleText} variant="h4">
            Why this project?
          </Typography>
          <Typography variant="h5">
            Having worked with thousands of students, educators and makers
            across the globe, we realised that everyone needs a suggestion on
            <b> what components we can choose</b> to bring alive our next
            innovative idea.
          </Typography>
          <Typography variant="h5" className={classes.secondPara}>
            Here, putting our years of knowledge combined with feedback from
            you, we are leveraging the power of <b>Artificial Intelligence</b>{" "}
            to realise an intuitive suggestive system to help you filter out the
            the right components.
          </Typography>
          <Typography variant="body1" className={classes.feedbackPara}>
            The project is currently in beta testing stage and is undergoing
            constant improvement.{" "}
            <a
              href="https://forms.gle/DuhuaoU8kSUNjdVs8"
              target="__blank"
              className={classes.link}
            >
              Click Here
            </a>{" "}
            to support the project with your valueable feedback.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
