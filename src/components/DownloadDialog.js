import React, { useReducer, useMemo } from "react";
import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  Button,
  DialogActions,
  makeStyles,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

import { v4 as uuidGenerator } from "uuid";
import jsPDF from "jspdf";
import "jspdf-autotable";

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

function DownloadDialog({
  open,
  onClose,
  inputComponents,
  brainComponents,
  outputComponents,
}) {
  const classes = useStyles();

  const componentModifier = (components) =>
    components.map((c) => {
      c.selected = true;
      c.id = uuidGenerator();
      return c;
    });

  const initalState = useMemo(
    () => ({
      inputSelected: componentModifier(inputComponents),
      outputSelected: componentModifier(outputComponents),
      brainSelected: componentModifier(brainComponents),
    }),
    [inputComponents, outputComponents, brainComponents]
  );

  const reducer = (state, action) => {
    if (action.type === "input") {
      let newInputSelected = [...state.inputSelected];
      for (let c of newInputSelected) {
        if (c.id === action.id) {
          c.selected = action.checked;
        }
      }
      return {
        ...state,
        inputSelected: newInputSelected,
      };
    } else if (action.type === "output") {
      let newOutputSelected = [...state.outputSelected];
      for (let c of newOutputSelected) {
        if (c.id === action.id) {
          c.selected = action.checked;
        }
      }
      return {
        ...state,
        outputSelected: newOutputSelected,
      };
    } else if (action.type === "brain") {
      let newBrainSelected = [...state.brainSelected];
      for (let c of newBrainSelected) {
        if (c.id === action.id) {
          c.selected = action.checked;
        }
      }
      return {
        ...state,
        brainSelected: newBrainSelected,
      };
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  const inputCheckBoxes =
    state.inputSelected && state.inputSelected.length > 0
      ? state.inputSelected.map((c) => (
          <FormControlLabel
            control={
              <Checkbox
                key={c.id}
                checked={c.selected}
                onChange={(e) =>
                  dispatch({
                    type: "input",
                    id: c.id,
                    checked: e.target.checked,
                  })
                }
                name={c.name}
                color="primary"
              />
            }
            label={c.name}
          />
        ))
      : null;

  const outputCheckBoxes =
    state.outputSelected && state.outputSelected.length > 0
      ? state.outputSelected.map((c) => (
          <FormControlLabel
            control={
              <Checkbox
                key={c.id}
                checked={c.selected}
                onChange={(e) =>
                  dispatch({
                    type: "output",
                    id: c.id,
                    checked: e.target.checked,
                  })
                }
                name={c.name}
                color="primary"
              />
            }
            label={c.name}
          />
        ))
      : null;

  const brainCheckBoxes =
    state.brainSelected && state.brainSelected.length > 0
      ? state.brainSelected.map((c) => (
          <FormControlLabel
            control={
              <Checkbox
                key={c.id}
                checked={c.selected}
                onChange={(e) =>
                  dispatch({
                    type: "brain",
                    id: c.id,
                    checked: e.target.checked,
                  })
                }
                name={c.name}
                color="primary"
              />
            }
            label={c.name}
          />
        ))
      : null;

  const downloadList = () => {
    console.log(state);
    let componentsToPrint = [];
    if (state.inputSelected) {
      componentsToPrint = componentsToPrint.concat(
        state.inputSelected.filter((c) => c.selected === true)
      );
    }
    if (state.outputSelected) {
      componentsToPrint = componentsToPrint.concat(
        state.outputSelected.filter((c) => c.selected === true)
      );
    }
    if (state.brainSelected) {
      componentsToPrint = componentsToPrint.concat(
        state.brainSelected.filter((c) => c.selected === true)
      );
    }
    if (componentsToPrint.length > 0) {
      let doc = new jsPDF();
      let bodyData = componentsToPrint.map((c) => [
        c.name.trim(),
        c.url.trim(),
      ]);
      doc.autoTable({
        head: [["Name", "Link"]],
        body: bodyData,
      });

      doc.save("components.pdf");
    }
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open} fullWidth={true}>
      <DialogTitle>
        <Typography variant="h5" className={classes.titleText}>
          Download List
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography gutterBottom>
          You can download the list of the components as a pdf file to be used
          as a reference later. Choose the components you want in it.
        </Typography>
        {inputCheckBoxes && (
          <>
            <Typography variant="h6" className={classes.titleText}>
              Input Components
            </Typography>
            <FormGroup>{inputCheckBoxes}</FormGroup>
          </>
        )}
        {brainCheckBoxes && (
          <>
            <Typography variant="h6" className={classes.titleText}>
              Brain Components
            </Typography>
            <FormGroup>{brainCheckBoxes}</FormGroup>
          </>
        )}
        {outputCheckBoxes && (
          <>
            <Typography variant="h6" className={classes.titleText}>
              Output Components
            </Typography>
            <FormGroup>{outputCheckBoxes}</FormGroup>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={downloadList}
          color="primary"
          variant="contained"
        >
          <b>Download</b>
        </Button>
        <Button autoFocus onClick={onClose} color="primary" variant="contained">
          <b>Cancel</b>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DownloadDialog;
