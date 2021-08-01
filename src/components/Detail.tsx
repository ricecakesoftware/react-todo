import React from 'react';
import { useState } from 'react';
import { Card, Typography, CardContent, TextField, Button } from '@material-ui/core';
import { Todo } from '../Types';

type Props = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

function Detail(props: Props) {
  const now = new Date();
  const [content, setContent] = useState('');
  const [limit, setLimit] = useState(now);

  const handleContentChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  const handleLimitChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(new Date(e.target.value));
  }

  const handleRegisterClicked = () => {
    const newTodo : Todo = {
      id: now.getTime(),
      done: false,
      content: content,
      limit: limit,
    };
    props.setTodos([newTodo, ...props.todos]);
    setContent('');
    setLimit(now);
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h5' component='h1'>
          詳細
        </Typography>
        <TextField
          label='内容'
          margin='normal'
          fullWidth
          placeholder='やることを入力してください。'
          InputLabelProps={{shrink: true,}}
          onChange={handleContentChanged}
        />
        <TextField
          label='期限'
          type='date'
          margin='normal'
          fullWidth
          defaultValue={now.getFullYear() + '-' + ('00' + (now.getMonth() + 1)).slice(-2) + '-' + ('00' + now.getDate()).slice(-2)}
          InputLabelProps={{shrink: true,}}
          onChange={handleLimitChanged}
        />
        <Button variant='contained' color='primary' fullWidth onClick={handleRegisterClicked}>登録</Button>
      </CardContent>
    </Card>
  );
}

export default Detail;
