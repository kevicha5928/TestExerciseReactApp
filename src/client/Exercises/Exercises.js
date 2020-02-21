import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

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
      <Grid item sm>
        <LeftPane
          styles={styles.Paper}
          exercises={exercises}
          category={category}
          onSelect={onSelect}
          onDelete={onDelete}
          onSelectEdit={onSelectEdit}
        />
      </Grid>
      <Grid item sm>
        <RightPane
          styles={styles.Paper}
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
