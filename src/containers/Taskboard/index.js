import React, { Component } from 'react';
import { Button, Grid, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styles from '../Taskboard/styles';
import { STATUSES } from '../../constants';
import TaskList from './../../components/TaskList';
import TaskForm from './../../components/TaskForm';
import PropTypes from 'prop-types';

const listTasks = [
  {
    id: 1,
    title: 'Read Book',
    description: 'Read material UI book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play Football',
    description: 'Play football with my friends',
    status: 2,
  },
  {
    id: 3,
    title: 'Play Game',
    description: 'Play game at home',
    status: 1,
  },
];
class Taskboard extends Component {
  state = {
    open: false,
  };
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTasks.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList
              tasks={taskFiltered}
              status={status}
              key={index}
            ></TaskList>
          );
        })}
      </Grid>
    );

    return xhtml;
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose}></TaskForm>;

    return xhtml;
  }

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Add New Task
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Taskboard);
