import { useState } from 'react';
import {
  Typography,
} from "@mui/material";
import { Counter } from '../features/counter/Counter';
import AddIcon from '@mui/icons-material/Add'

import ReportsList from '../components/ReportsList';

function Home() {

  return (
    <>
      <Typography color="primary.dark" variant="h1">
        Home
      </Typography>
      <ReportsList />
      <div className="card">
        <Counter />
      </div>
    </>
  )
}
export default Home;
