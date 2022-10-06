import { useState } from 'react';
import {
  Box,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import ControlledSort from '../components/Report/ControlledSort'

function About() {

  return (
    <>
      <Typography color="primary.dark" variant="h1">
        About Page
      </Typography>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '20vh' }}
      >
        <ControlledSort />
      </Grid>
    </>
  )
}
export default About;
