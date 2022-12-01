import React from "react";
import {
  makeStyles,
  Paper,
  Input,
  InputAdornment,
  Divider,
  Select,
  MenuItem,
  Button,
  Typography,
  Container,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    textTransform: "capitalize",
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  buttonText: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: "bold",
  },
  searchField: {
    display: "flex",
    width: "50vw",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
    maxWidth: 800,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  input: {
    flexGrow: 9,
  },
  select: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  divider: {
    height: "2rem",
    width: "2px",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

function SearchBar({ mode, setMode, query, setQuery, onSubmit }) {
  const classes = useStyles();
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.searchField}>
        <Input
          className={classes.input}
          value={query}
          onKeyDown={onKeyDownHandler}
          onChange={queryChangeHandler}
          disableUnderline
          placeholder="Enter your project name (Be as descriptive as possible)"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          }
        />
        <Divider className={classes.divider} />
        <Select
          value={mode}
          onChange={handleChange}
          disableUnderline
          className={classes.select}
          MenuProps={{
            getContentAnchorEl: null,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          }}
          SelectDisplayProps={{
            style: {
              fontWeight: "bold",
            },
          }}
        >
          <MenuItem value={"student"}>Student</MenuItem>
          <MenuItem value={"professional"}>Professional</MenuItem>
          <MenuItem value={"teacher"}>Teacher</MenuItem>
        </Select>
      </Paper>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={onSubmit}
      >
        <Typography variant="h5" className={classes.buttonText}>
          Find components now
        </Typography>
      </Button>
    </Container>
  );
}

export default SearchBar;
