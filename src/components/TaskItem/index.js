import React, { Component } from 'react';
import styles from './styles';
import {
  Card,
  CardActions,
  CardContent,
  Fab,
  Grid,
  Icon,
  Typography,
  withStyles,
} from '@material-ui/core';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    const { title, description } = task;
    return (
      <Card>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="Edit"
            className={classes.fab}
            size="small"
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            color="default"
            aria-label="Delete"
            className={classes.fab}
            size="small"
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
