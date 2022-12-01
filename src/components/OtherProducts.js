import React from "react";

import { Container, Typography, makeStyles, Box } from "@material-ui/core";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  titleText: {
    paddingBottom: theme.spacing(2),
  },
  otherContainer: {
    padding: theme.spacing(4),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  productContainer: {
    justifyContent: "center",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(auto, 15rem))",
  },
}));

function OtherProducts() {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.otherContainer}>
        <Typography className={classes.titleText} variant="h4">
          Explore our other interesting products
        </Typography>
        <Box className={classes.productContainer}>
          <Product
            url="https://www.papercircuit.in/"
            title="Paper Circuit"
            imgPath="assets/bio-sensor.png"
          />
          <Product
            url="https://www.banaao.co.in/"
            title="Banaao Makerspace"
            imgPath="assets/banaao_logo.jpg"
          />
          <Product
            url="https://www.amazon.in/dp/B07NKGPX6H/ref=cm_sw_em_r_mt_dp_GM0RYR0FKDZGQE1CNT13"
            title="IOT connected lamp"
            imgPath="assets/lamp.svg"
          />
          <Product
            url="https://www.maketogether.banaao.co.in/"
            title="Makerspace forum"
            imgPath="assets/forum.svg"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default OtherProducts;
