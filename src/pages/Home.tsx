import { useGetReportByNameQuery } from '../services/report'
import {
  Typography,
} from "@mui/material";

import ReportsList from '../components/Report/ReportsList';

function Home() {

  const { data, error, isLoading } = useGetReportByNameQuery('')

  return (
    <>
      <Typography color="primary.dark" variant="h1">
        Home
      </Typography>
      <ReportsList />
      <div className="card">
        <div className="App">
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              <h3>{data.content.map((value: any) =>
                value.id
              )}</h3>
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}
export default Home;
