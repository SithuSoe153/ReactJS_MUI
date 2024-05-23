import React from 'react';

import { Button, Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

}));



const Cards = () => {
    const classes = useStyles();

    return (

        <Card>
            <CardMedia
                image='https://images.unsplash.com/photo-1542782321-68565921213a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                title='Contemplative Reptile'
            />
            <CardContent>
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