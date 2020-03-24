import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Consumer, withContext } from "../context";

// import "./LeftPane.css";

const useStyles = makeStyles(theme => ({
  Paper: {
    [theme.breakpoints.up("sm")]: {
      padding: "2em",
      marginTop: "1em",
      marginBottom: "1em",
      marginRight: ".5em",
      height: "calc(100% - 2em)"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
      margin: "0.5em",
      height: "calc(100% - 1em)",
      overflowY: "auto"
    },
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "1em"
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.dark,
      outline: "1px solid slategrey"
    }
  },
  poo: {
    textTransform: "capitalize",
    textAlign: "left"
  }
}));

function LeftPane({
  sortedExercises,
  category,
  onSelect,
  onDelete,
  onSelectEdit
}) {
  const classes = useStyles();
  return (
    <Paper className={classes.Paper}>
      {sortedExercises.map(([muscle, relatedExercises]) => {
        if (!category || category === muscle) {
          return (
            <Fragment key={muscle}>
              <Typography
                variant="h4"
                className={classes.poo}
                color="secondary"
              >
                {muscle}
              </Typography>
              <List component="ul">
                {relatedExercises.map(exercise => (
                  <ListItem
                    button
                    key={exercise.id}
                    onClick={() => onSelect(exercise.id)}
                  >
                    <ListItemText primary={exercise.title} />
                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={() => onSelectEdit(exercise.id)}
                        color="primary"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => onDelete(exercise.id)}
                        color="primary"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Fragment>
          );
        }
      })}
    </Paper>
  );
}

LeftPane.propTypes = {};

LeftPane.defaultProps = {};

export default withContext(LeftPane);
