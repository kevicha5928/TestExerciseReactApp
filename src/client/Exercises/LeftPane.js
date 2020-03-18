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
      // marginBottom: ".25em",
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

function LeftPane({ exercises, category, onSelect, onDelete, onSelectEdit }) {
  // console.log(exercises);
  const classes = useStyles();
  const renderItems = ([muscle, relatedExercises]) => {
    // console.log(muscle, relatedExercises);
    if (!category || category === muscle) {
      return (
        <Fragment key={muscle}>
          <Typography variant="h4" className={classes.poo} color="secondary">
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
    return null;
  };

  return <Paper className={classes.Paper}>{exercises.map(renderItems)}</Paper>;
}

LeftPane.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.array).isRequired,
  category: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

LeftPane.defaultProps = {
  category: null
};

export default LeftPane;
