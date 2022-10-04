import {
  Typography,
} from "@mui/material";
import ReportList from '../components/Report/ReportList';

function Home() {

  return (
    <>
      <Typography color="primary.dark" variant="h1">
        Home
      </Typography>
      <ReportList />
    </>
  )
}
export default Home;
