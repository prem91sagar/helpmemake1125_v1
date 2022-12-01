import React, { useState } from "react";

import {
  Container,
  Typography,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import ProjectComponent from "./ProjectComponent";
import ShareDialog from "./ShareDialog";
import DownloadDialog from "./DownloadDialog";

const useStyles = makeStyles((theme) => ({
  titleText: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(2),
    },
    fontFamily: theme.typography.fontFamily,
    fontWeight: "900",
  },
  componentsContainer: {
    padding: theme.spacing(8),
    alignItems: "flex-start",
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  },
  productContainer: {
    display: "flex",
    overflowX: "auto",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "nowrap",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  button: {
    textTransform: "capitalize",
    margin: theme.spacing(1),
  },
  buttonText: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: "bold",
  },
}));

function ProjectComponents({
  inputComponents,
  brainComponents,
  outputComponents,
  buyUrl,
}) {
  const classes = useStyles();
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);

  // const buyClickHandler = () => {
  //   window.open(buyUrl, "_blank");
  // };

  const shareClickHandler = () => {
    setShowShareDialog(true);
  };

  const handleShareDialogClose = () => {
    setShowShareDialog(false);
  };

  const downloadClickHandler = () => {
    setShowDownloadDialog(true);
  };

  const handleDownloadDialogClose = () => {
    setShowDownloadDialog(false);
  };

  return (
    <Container>
      <Box className={classes.componentsContainer}>
        <Typography className={classes.titleText} variant="h5">
          Input Components
        </Typography>
        <Box className={classes.productContainer}>
          {inputComponents.map((p, i) => (
            <ProjectComponent
              key={i}
              url={p.url}
              name={p.name}
              imgUrl={p.imgUrl}
              color="#f55b78"
            />
          ))}
        </Box>
        <Typography className={classes.titleText} variant="h5">
          Brain Components
        </Typography>
        <Box className={classes.productContainer}>
          {brainComponents.map((p, i) => (
            <ProjectComponent
              key={i}
              url={p.url}
              name={p.name}
              imgUrl={p.imgUrl}
              color="#b18ced"
            />
          ))}
        </Box>
        <Typography className={classes.titleText} variant="h5">
          Output Components
        </Typography>
        <Box className={classes.productContainer}>
          {outputComponents.map((p, i) => (
            <ProjectComponent
              key={i}
              url={p.url}
              name={p.name}
              imgUrl={p.imgUrl}
              color="#66e18f"
            />
          ))}
        </Box>
      </Box>
      <Box className={classes.buttonContainer}>
        {/* <Button
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={buyClickHandler}
        >
          <Typography variant="h5" className={classes.buttonText}>
            Buy From Banaao
          </Typography>
        </Button> */}
        <Button
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={shareClickHandler}
        >
          <Typography variant="h5" className={classes.buttonText}>
            Share Idea
          </Typography>
        </Button>
        <Button
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={downloadClickHandler}
        >
          <Typography variant="h5" className={classes.buttonText}>
            Download List
          </Typography>
        </Button>
      </Box>
      <ShareDialog onClose={handleShareDialogClose} open={showShareDialog} />
      <DownloadDialog
        onClose={handleDownloadDialogClose}
        open={showDownloadDialog}
        inputComponents={inputComponents}
        brainComponents={brainComponents}
        outputComponents={outputComponents}
      />
    </Container>
  );
}

export default ProjectComponents;
