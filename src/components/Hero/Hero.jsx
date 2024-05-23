import React from 'react';

import { Button, Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    button: {
        marginTop: '40px',
    }
}));


const Hero = () => {
    const classes = useStyles();

    return (
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm" >
                    <Typography variant="h2" align='center' color="textPrimary" gutterBottom>
                        Photo Album
                    </Typography>

                    <Typography variant="h5" align='center' color="textSecondary" paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, vel et ea maxime aliquid alias. Exercitationem porro error cumque beatae impedit eveniet. Natus quis officia tempora dolores earum ipsam ab.
                    </Typography>

                    <div className={classes.button}>
                        <Grid container spacing={2} justifyContent={'center'}>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    View All Photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    View All Secondary
                                </Button>
                            </Grid>

                        </Grid>
                    </div>

                </Container>

            </div>
        </main>
    )
}

export default Hero;