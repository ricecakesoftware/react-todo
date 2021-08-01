import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: 'calc(100vh - 16px)',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
