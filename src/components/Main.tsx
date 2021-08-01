import React from 'react';
import { useState } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Detail from './Detail';
import List from './List';
import { Todo } from '../Types';

const useStyles = makeStyles(() => ({
  main: {
    flex: '1',
  },
}));

function Main() {
  const classes = useStyles();
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <Paper elevation={0} component='main' className={classes.main}>
      <Detail todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </Paper>
  );
}

export default Main;
