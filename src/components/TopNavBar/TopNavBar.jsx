import React from 'react';

import { Button, Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: '20px',
    }
}));

const TopNavBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="relative" color="primary">
            <Toolbar>
                <PhotoCameraIcon className={classes.icon} />
                <Typography variant="h6" style={{ marginLeft: '10px' }}>
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default TopNavBar;