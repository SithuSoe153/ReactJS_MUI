import React from 'react';

import { Button, Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Cards from './Card'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        // padding: '20px 0'
        padding: theme.spacing(8, 0),
    }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const CardList = () => {
    const classes = useStyles();

    return (

        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                        <Cards cards={index} />

                    </Grid>
                ))}
            </Grid>
        </Container>

    )
}

export default CardList;