import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core";
import Form from "./Form";
import "./LeftPane.css";

function RightPane({
  muscles,
  styles,
  exercise,
  exercise: {
    title = "Welcome!!!",
    description = "Please select an exercise from the list on the left"
  },
  editMode,
  onEdit
}) {
  // console.log(exercise);
  return (
    <Paper style={styles}>
      {editMode ? (
        <Form muscles={muscles} onSubmit={onEdit} exercise={exercise} />
      ) : (
        <Fragment>
          <Typography variant="h2">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Fragment>
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
