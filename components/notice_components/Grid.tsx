import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  textAlign: 'center',
}));

export default function BasicGrid() {
  return (
    <body>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Item>xs=2</Item>
            </Grid>
            <Grid item xs={2}>
            <Item>xs=2</Item>
            </Grid>
            <Grid item xs={8}>
            <Item>xs=8</Item>
            </Grid>
            <Grid item xs={8}>
            <Item>xs=8</Item>
            </Grid>
        </Grid>
        </Box>
        </body>    
  );
}