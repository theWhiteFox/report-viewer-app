// 1. list of reports
// 2. sort list by name desc
// 3. report list item name description button open report result table
// 4. billing period sort by date : 2 date pickers deafult date reange of 4 file jan 2017 dec 2017
// /api/reports.json contains a list of available reports.
import { cloneElement, ReactElement, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import LoadingSpinner from './LoadingSpinner'
import { Link } from 'react-router-dom';
import { useGetReportListQuery, useGetReportQuery } from '../../services/report'
import { Button, FormControl, InputLabel, ListItemText, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import MaterialUIPickers from './MaterialUIPicker'

const reports = {
    reportId: '41',
    billingPeriod: '201708'
}

const reportsMob = {
    reportId: '245',
    billingPeriod: '201708'
}

const numberOfReports = [1]

function generate(element: ReactElement) {
    return numberOfReports.map((value: any) =>
        cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const ReportList = () => {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const [secondary, setSecondary] = useState(false);

    useGetReportQuery({ reportId: `${reports.reportId}`, billingPeriod: `${reports.billingPeriod}` })
    useGetReportQuery({ reportId: `${reportsMob.reportId}`, billingPeriod: `${reportsMob.billingPeriod}` })

    const { data, error, isLoading } = useGetReportListQuery('')

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1250 }}>
            <FormGroup row>
                <FormControl sx={{ minWidth: 120, mb: 2, mr: 2 }}>
                    <InputLabel id="demo-simple-select-label">Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={20}>Ascending</MenuItem>
                        <MenuItem value={30}>Descending</MenuItem>
                    </Select>
                </FormControl>
                <MaterialUIPickers />
                <FormControlLabel sx={{ mb: 2, ml: 1 }}
                    control={
                        <Checkbox
                            checked={secondary}
                            onChange={(event) => setSecondary(event.target.checked)}
                        />
                    }
                    label="Billing date"
                />
            </FormGroup>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                    <Demo sx={{ mt: 2, mb: 1 }}>
                        {
                            isLoading &&
                            <div>
                                <LoadingSpinner />
                            </div>
                        }
                        <List>
                            {generate(
                                <>
                                    <Link style={{ textDecoration: 'none' }}
                                        to={{
                                            pathname: `${reports.reportId}-${reports.billingPeriod}.json`,
                                        }}
                                        state={{ modal: true }}
                                    >
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="open">
                                                    <FileOpenIcon />
                                                </IconButton>}
                                        >
                                            <ListItemIcon>
                                                <ReceiptIcon />
                                            </ListItemIcon>
                                            {error ? (
                                                <>Oh no, there was an error</>
                                            ) : isLoading ? (
                                                <>Loading...</>
                                            ) : data ? (
                                                <>
                                                    <h3>
                                                        <ListItemText
                                                            primary={data?.content[0].name + ': ' + data?.content[0].description}
                                                            secondary={secondary ? reports.billingPeriod : null}
                                                        />
                                                    </h3>
                                                </>
                                            ) : null}
                                        </ListItem>
                                        <Divider sx={{ bgcolor: "secondary.dark" }} variant="middle" component="li" />
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }}
                                        to={{
                                            pathname: `${reportsMob.reportId}-${reportsMob.billingPeriod}.json`,
                                        }}
                                        state={{ modal: true }}
                                    >
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="open">
                                                    <FileOpenIcon />
                                                </IconButton>}
                                        >
                                            <ListItemIcon>
                                                <ReceiptIcon />
                                            </ListItemIcon>
                                            {error ? (
                                                <>Oh no, there was an error</>
                                            ) : isLoading ? (
                                                <>Loading...</>
                                            ) : data ? (
                                                <h3>
                                                    <ListItemText
                                                        primary={data?.content[1].name + ': ' + data?.content[1].description}
                                                        secondary={secondary ? reportsMob.billingPeriod : null}
                                                    />
                                                </h3>
                                            ) : null}
                                        </ListItem>
                                        <Divider sx={{ bgcolor: "secondary.dark" }} variant="middle" component="li" />
                                    </Link>
                                </>,
                            )}
                        </List>
                    </Demo>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ReportList