import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

function Exercises({
  muscles,
  exercises,
  category,
  exercise,
  onSelect,
  onDelete,
  onSelectEdit,
  onEdit,
  editMode
}) {
  // console.log(exercises);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <LeftPane
          exercises={exercises}
          category={category}
          onSelect={onSelect}
          onDelete={onDelete}
          onSelectEdit={onSelectEdit}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <RightPane
          exercise={exercise}
          editMode={editMode}
          muscles={muscles}
          onEdit={onEdit}
        />
      </Grid>
    </Grid>
  );
}

Exercises.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default Exercises;
