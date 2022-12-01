import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    padding: theme.spacing(0.5),
  },
  text: {
    color: theme.palette.common.white,
    textAlign: "center",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.text}>
        Powered by Banaao - A Makers' Playground
      </Typography>
    </Box>
  );
}

export default Footer;
