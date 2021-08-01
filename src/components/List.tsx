import React from 'react';
import { Card, CardContent, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Todo } from '../Types';
import Item from './Item';

type Props = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

function List(props: Props) {
  const handleTodoDoned = (id: number) => {
    const newTodos = props.todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    props.setTodos(newTodos);
  }
  const handleTodoDeleted = (id: number) => {
    const newTodos = props.todos.slice();
    newTodos.forEach((v, i) => {
      if (v.id === id) {
        newTodos.splice(i, 1);
      }
    });
    props.setTodos(newTodos);
  }
  return (
    <Card>
      <CardContent>
        <Typography variant='h5' component='h1'>
          一覧
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>内容</TableCell>
                <TableCell>期限</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.todos.map((todo) => (
                <Item key={todo.id} todo={todo} onDone={handleTodoDoned} onDelete={handleTodoDeleted} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default List;
