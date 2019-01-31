import React from 'react';
import { Grid,Paper, Typography } from '@material-ui/core';
import Articles from './Articles';

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflow: "auto"
  }
};

export default props =>
  <Grid container>
    <Grid item xs={2}>
      {/* <Paper style={style.Paper}>
        {(["test",1,2]).map(group => (
          <Typography
            variant="headline"
            style={{ textTransform: "capitalize" }}
          >
            {group}

          </Typography>
        ))}
      </Paper> */}
      </Grid>

    <Grid item xs={10}>
        {/* {[0,1,2].map(group => (
              <Paper style={style.Paper}>

          <Typography
            variant="headline"
            style={{ textTransform: "capitalize" }}>
            {group}

            
      
          </Typography>
          </Paper>

        ))} */}
        <Articles user={{username:"jessjelly"}}/>
    </Grid>
    </Grid>