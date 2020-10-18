import React, { Component } from 'react';
import styles from './styles';
import { Box, Grid, withStyles } from '@material-ui/core';
import TaskItem from './../TaskItem';

class TaskList extends Component {
    render() {
        const { classes, tasks, status } = this.props;
        return (
            <Grid item md={4} xs={12}>
                <Box my={2}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {tasks.map((task) => {
                        return <TaskItem task={task} status={status} key={task.id}></TaskItem>;
                    })}
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);
