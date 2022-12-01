import React from "react";
import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  Button,
  DialogActions,
  makeStyles,
  useTheme,
  Box,
} from "@material-ui/core";

import {
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  titleText: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: "bold",
  },
  dialog: {
    padding: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    margin: theme.spacing(0.5),
  },
}));

const message =
  "Hey, I have an awesome Idea for a project.\nGo to this link to see what we will need to build it.\n";

function ShareDialog({ open, onClose }) {
  const classes = useStyles();
  const theme = useTheme();
  const url = window.location.href;
  return (
    <Dialog onClose={onClose} open={open} fullWidth={true}>
      <DialogTitle>
        <Typography variant="h5" className={classes.titleText}>
          Share Idea
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography gutterBottom>
          Let your friends now about your <b>Awesome Idea</b> and the components
          needed to make it.
        </Typography>
        <Box className={classes.buttonContainer}>
          <WhatsappShareButton
            url={url}
            title={message}
            className={classes.button}
          >
            <WhatsappIcon size={theme.spacing(6)} round />
          </WhatsappShareButton>
          <FacebookShareButton
            url={url}
            quote={message}
            className={classes.button}
          >
            <FacebookIcon size={theme.spacing(6)} round />
          </FacebookShareButton>
          <TelegramShareButton
            title={message}
            url={url}
            className={classes.button}
          >
            <TelegramIcon size={theme.spacing(6)} round />
          </TelegramShareButton>
          <TwitterShareButton
            url={url}
            title={message}
            className={classes.button}
          >
            <TwitterIcon size={theme.spacing(6)} round />
          </TwitterShareButton>
          <RedditShareButton
            url={url}
            title={message}
            className={classes.button}
          >
            <RedditIcon size={theme.spacing(6)} round />
          </RedditShareButton>
          <EmailShareButton
            subject="Project Idea"
            url={url}
            body={message}
            className={classes.button}
          >
            <EmailIcon size={theme.spacing(6)} round />
          </EmailShareButton>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary" variant="contained">
          <b>Cancel</b>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ShareDialog;
