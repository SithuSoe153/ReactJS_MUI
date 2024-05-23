import React from 'react';

import { Button, Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Cards from './Card'

const useStyles = makeStyles((theme) => ({

}));



const CardList = () => {
    const classes = useStyles();

    return (

        <Container maxWidth="md">
            <Grid container spacing={4}>
                <Grid item>

                    <Cards />

                </Grid>
            </Grid>
        </Container>

    )
}

export default CardList;