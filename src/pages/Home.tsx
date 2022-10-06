import {
  Typography,
} from "@mui/material";
import ReportList from '../components/Report/ReportList';
import { useState } from "react";

function Home() {

  return (
    <>
      <Typography sx={{ mt: 1, mb: 2 }} color="primary.dark" variant="h1">
        Reports
      </Typography>
      <ReportList />
    </>
  )
}
export default Home;
