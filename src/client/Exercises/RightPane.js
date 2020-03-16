import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import Form from "./Form";

const useStyles = makeStyles({
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  },
  "@media (max-width: 600px)": {
    Paper: {
      padding: 20,
      marginTop: 10,
      marginBottom: 10,
      height: 300,
      overflowY: "auto"
    }
  },
  poo: {
    textTransform: "capitalize",
    textAlign: "left"
  }
});

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
      <Typography variant="h2">{title}</Typography>
      {editMode ? (
        <Form muscles={muscles} onSubmit={onEdit} exercise={exercise} />
      ) : (
        <Typography variant="body1">{description}</Typography>
      )}
    </Paper>
  );
}

RightPane.propTypes = {
  styles: PropTypes.shape({
    padding: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number
  }).isRequired,
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
