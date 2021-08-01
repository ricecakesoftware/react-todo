import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Header() {
  return (
    <AppBar position='static' component='header'>
      <Toolbar>
        <Typography variant='h6'>TODOアプリ</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
