import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import SearchContainer from "../components/SearchContainer";
import About from "../components/About";
import Footer from "../components/Footer";
import OtherProducts from "../components/OtherProducts";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
}));

function Home() {
  const classes = useStyles();
  const [mode, setMode] = useState("student");
  const [query, setQuery] = useState("");

  const history = useHistory();
  const onSubmit = () => {
    history.push(`/search/${mode}/${query}`);
  };

  return (
    <Box className={classes.root}>
      <SearchContainer
        title="Let's Make"
        subtitle="Find components you will need to build your next project"
        mode={mode}
        setMode={setMode}
        query={query}
        setQuery={setQuery}
        onSubmit={onSubmit}
      />
      <About />
      <OtherProducts />
      <Footer />
    </Box>
  );
}

export default Home;
