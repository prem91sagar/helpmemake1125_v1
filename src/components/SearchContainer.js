import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(14),
    position: "relative",
  },
  coloredBox: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(8),
    minHeight: "200px",
    maxHeight: "360px",
    height: "42vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  minimizedColoredBox: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  titleText: {
    textAlign: "center",
  },
  subtitleText: {
    paddingTop: theme.spacing(1),
    textAlign: "center",
  },
}));

function SearchContainer({
  title,
  subtitle,
  minimized,
  mode,
  setMode,
  query,
  setQuery,
  onSubmit,
}) {
  const classes = useStyles();

  if (minimized) {
    return (
      <Box className={classes.root}>
        <Box className={classes.minimizedColoredBox}>
          <SearchBar
            mode={mode}
            setMode={setMode}
            query={query}
            setQuery={setQuery}
            onSubmit={onSubmit}
          />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box className={classes.root}>
        <Box className={classes.coloredBox}>
          {title && (
            <Typography className={classes.titleText} variant="h2">
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography className={classes.subtitleText} variant="h4">
              {subtitle}
            </Typography>
          )}

          <SearchBar
            mode={mode}
            setMode={setMode}
            query={query}
            setQuery={setQuery}
            onSubmit={onSubmit}
          />
        </Box>
      </Box>
    );
  }
}

export default SearchContainer;
