import React from 'react';
import {AppBar, Toolbar, Typography } from '@material-ui/core';


export default props =>
<div>
  <AppBar position="static">
  <Toolbar>
    <Typography variant="headline" color="inherit">
    K-news
    </Typography>
  </Toolbar>
  </AppBar>
</div>