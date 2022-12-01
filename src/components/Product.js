import {
  makeStyles,
  Card,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "inline-block",
    margin: theme.spacing(1),
  },
  actionArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    padding: theme.spacing(4),
  },
  productImage: {
    height: "8rem",
    width: "8rem",
  },
  productTitle: {
    paddingTop: theme.spacing(1),
    fontWeight: "bold",
    textAlign: "center",
  },
}));

function Product({ title, url, imgPath }) {
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      onClick={() => {
        window.open(url, "_blank");
      }}
      elevation={0}
    >
      <CardActionArea className={classes.actionArea}>
        <img
          className={classes.productImage}
          src={window.location.origin + `/${imgPath}`}
          alt=""
        />
        <Typography variant="h5" className={classes.productTitle}>
          {title}
        </Typography>
      </CardActionArea>
    </Card>
  );
}

export default Product;
