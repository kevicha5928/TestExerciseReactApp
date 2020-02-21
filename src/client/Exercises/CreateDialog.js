import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import {
  IconButton,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Form from "./Form";

class CreateDialog extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };
  handleFormSubmit = exercise => {
    this.handleToggle();
    this.props.onCreate(exercise);
  };

  render() {
    const { open } = this.state;
    const { muscles } = this.props;

    // console.log(categories);
    return (
      <Fragment>
        <IconButton onClick={this.handleToggle} size="medium">
          <AddCircleIcon />
        </IconButton>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

CreateDialog.propTypes = {};

CreateDialog.defaultProps = {};

export default CreateDialog;
