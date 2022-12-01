import {
  makeStyles,
  Card,
  Typography,
  CardActionArea,
  Box,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "inline-block",
    width: "14rem",
    [theme.breakpoints.down("sm")]: {
      width: "8rem",
    },
    flex: "0 0 auto",
    margin: theme.spacing(1),
    "&:not(:first-child):not(:last-child)": {
      // marginTop: theme.spacing(3),
      // marginBottom: theme.spacing(3),
    },
  },
  actionArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    height: "100%",
  },
  productImage: {
    height: "6rem",
    width: "6rem",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  productTitle: {
    padding: theme.spacing(1),
    fontWeight: "bold",
    textAlign: "center",
    flexGrow: "1",
    wordBreak: "break-word",
  },
}));

function Product({ name, url, imgPath, imgUrl, color }) {
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      onClick={() => {
        window.open(url, "_blank");
      }}
      elevation={4}
    >
      <CardActionArea className={classes.actionArea}>
        <Box className={classes.imgContainer}>
          <img
            className={classes.productImage}
            src={imgPath ? window.location.origin + `/${imgPath}` : imgUrl}
            alt=""
          />
        </Box>
        <Typography
          variant="h6"
          className={classes.productTitle}
          style={{ backgroundColor: color }}
        >
          {name}
        </Typography>
      </CardActionArea>
    </Card>
  );
}

export default Product;
