import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import Form from "./Form";

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
    overflowY: "auto"
  },
  poo: {
    textTransform: "capitalize",
    textAlign: "left"
  }
}));

function RightPane({
  muscles,
  exercise,
  exercise: {
    title = "Welcome!!!",
    description = "Please select an exercise from the list on the left"
  },
  editMode,
  onEdit
}) {
  const classes = useStyles();
  // console.log(exercise);
  return (
    <Paper className={classes.Paper}>
      <Typography variant="h2" color="secondary">
        {title}
      </Typography>
      {editMode ? (
        <Form muscles={muscles} onSubmit={onEdit} exercise={exercise} />
      ) : (
        <Typography variant="body1">{description}</Typography>
      )}
    </Paper>
  );
}

RightPane.propTypes = {
  exercise: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};
RightPane.defaultProps = {
  exercise: {
    title: "Welcome!!!",
    description: "Please select an exercise from the list on the left"
  }
};

export default RightPane;
