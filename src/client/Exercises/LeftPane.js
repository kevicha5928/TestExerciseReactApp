import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import "./LeftPane.css";

function LeftPane({
  styles,
  exercises,
  category,
  onSelect,
  onDelete,
  onSelectEdit
}) {
  // console.log(exercises);

  const renderItems = ([muscle, relatedExercises]) => {
    // console.log(muscle, relatedExercises);
    if (!category || category === muscle) {
      return (
        <Fragment key={muscle}>
          <Typography variant="h4" className="poo">
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
                  <IconButton onClick={() => onSelectEdit(exercise.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => onDelete(exercise.id)}>
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

  return <Paper style={styles}>{exercises.map(renderItems)}</Paper>;
}

LeftPane.propTypes = {
  styles: PropTypes.shape({
    padding: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number
  }).isRequired,
  exercises: PropTypes.arrayOf(PropTypes.array).isRequired,
  category: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

LeftPane.defaultProps = {
  category: null
};

export default LeftPane;
