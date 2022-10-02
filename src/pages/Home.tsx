import {
  Typography,
} from "@mui/material";

import ReportsList from '../components/Report/ReportsList';

function Home() {



  return (
    <>
      <Typography color="primary.dark" variant="h1">
        Home
      </Typography>
      <ReportsList />
      <div className="card">

      </div>
    </>
  )
}
export default Home;
