import { Box, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import SearchContainer from "../components/SearchContainer";
import NiceIdea from "../components/NiceIdea";
import Footer from "../components/Footer";
import OtherProducts from "../components/OtherProducts";
import ProjectComponents from "../components/ProjectComponents";
import { useParams, Redirect, useHistory } from "react-router-dom";
import FeedbackContact from "../components/FeedbackContact";
import Loading from "../components/Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
}));

// {
//   name: "Water Sensor",
//   imgFile: "water_sensor.png",
//   url: "https://www.banaao.co.in/",
// },

function Search() {
  const { queryParam, modeParam } = useParams();
  const classes = useStyles();

  const [components, setComponents] = useState();

  useEffect(() => {
    setComponents(null);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: queryParam, mode: modeParam }),
    };
    fetch("/search", requestOptions).then((response) => {
      if (response.status === 200) {
        response.json().then((components) => {
          setComponents(components);
        });
      }
    });
  }, [queryParam, modeParam]);

  const history = useHistory();

  const [mode, setMode] = useState(modeParam);
  const [query, setQuery] = useState(queryParam);
  const onSubmit = () => {
    history.push(`/search/${mode}/${query}`);
  };

  if (
    modeParam === "student" ||
    modeParam === "teacher" ||
    modeParam === "professional"
  ) {
    return (
      <Box className={classes.root}>
        <SearchContainer
          minimized={true}
          mode={mode}
          setMode={setMode}
          query={query}
          setQuery={setQuery}
          onSubmit={onSubmit}
        />
        <NiceIdea query={queryParam} />
        {components ? (
          <ProjectComponents
            inputComponents={components["input"]}
            outputComponents={components["output"]}
            brainComponents={components["brain"]}
            buyUrl="https://www.banaao.co.in/"
          />
        ) : (
          <Loading />
        )}
        <FeedbackContact />
        <OtherProducts />
        <Footer />
      </Box>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default Search;
