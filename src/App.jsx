import React, { Component } from 'react';
import { Button, Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, AppBar } from '@material-ui/core'

import { Hero } from './components/Hero';
import { TopNavBar } from './components/TopNavBar';

import CardList from './components/Card/CardList';

class App extends Component {
  render() {
    // const classes = useStyles();


    return (
      <>
        <CssBaseline />

        <TopNavBar />
        <Hero />

        <CardList />

      </>
    )
  }
}


export default App;
