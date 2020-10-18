import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';

class TaskForm extends Component {
    render() {
        const { classes, open, onClose } = this.props;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Add New Task</DialogTitle>
                <DialogContent>
                    <TextField id='standard-basic' label='Title' className={classes.textField} />
                    <TextField id='standard-basic' label='Description' multiline className={classes.textField} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color='primary'>
                        Cancel
                    </Button>
                    <Button onClick={onClose} color='primary'>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(TaskForm);
