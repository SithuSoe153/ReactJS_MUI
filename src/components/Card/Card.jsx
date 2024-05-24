import React from 'react';

import { Button, Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));



const Cards = (cards) => {
    const randomSeed = Math.floor(Math.random() * 1000);

    const classes = useStyles();

    return (

        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={`https://source.unsplash.com/random/?sig=${randomSeed}`}
                title='Contemplative Reptile'
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">Heading</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illum, quaerat dolorum odit est explicabo vel in consectetur animi dignissimos?</Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary'>View</Button>
                <Button size='small' color='primary'>Edit</Button>
            </CardActions>
        </Card>


    )
}

export default Cards;