import React from 'react';
import { TableRow, TableCell, Checkbox, Typography, Button } from '@material-ui/core';
import { Todo } from '../Types';

type Props = {
  todo: Todo,
  onDone: (id: number) => void;
  onDelete: (id: number) => void,
}

function Item(props: Props) {
  const handleDoneChanged = () => {
    props.onDone(props.todo.id);
  };
  const handleDeleteClicked = () => {
    props.onDelete(props.todo.id);
  };
  return (
    <TableRow>
      <TableCell><Checkbox checked={props.todo.done} onChange={handleDoneChanged} /></TableCell>
      <TableCell><Typography variant='h6'>{props.todo.content}</Typography></TableCell>
      <TableCell><Typography variant='h6'>{props.todo.limit.getFullYear() + '/' + ('00' + (props.todo.limit.getMonth() + 1)).slice(-2) + '/' + ('00' + props.todo.limit.getDate()).slice(-2)}</Typography></TableCell>
      <TableCell><Button variant='contained' color='inherit' fullWidth onClick={handleDeleteClicked}>削除</Button></TableCell>
    </TableRow>
  );
}

export default Item;
