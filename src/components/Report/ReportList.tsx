// 1. list of reports
// 2. sort list by name desc
// 3. report list item name description button open report result table
// 4. billing period sort by date : 2 date pickers deafult date reange of 4 file jan 2017 dec 2017
// /api/reports.json contains a list of available reports.
import React, { useState } from 'react'
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
import DateTimePickers from './BasicDateRangePicker'
import { ListItemText } from '@mui/material';

const reports = {
    reportId: '245',
    billingPeriod: '201708'
}

const numberOfReports = [1, 2, 3, 4]

function generate(element: React.ReactElement) {
    return numberOfReports.map((value: any) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const ReportList = () => {
    const [secondary, setSecondary] = React.useState(false);

    console.log(numberOfReports[0])

    const report = useGetReportQuery({ reportId: `${reports.reportId}`, billingPeriod: `${reports.billingPeriod}` })
    const { data, error, isLoading } = useGetReportListQuery('')

    // data?.content.map((value: any) => {
    //     reports.reportId = value.id
    // })

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1250 }}>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={secondary}
                            onChange={(event) => setSecondary(event.target.checked)}
                        />
                    }
                    label="last modified"
                />
            </FormGroup>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Reports List
                    </Typography>
                    <DateTimePickers />
                    <br />
                    <Demo>
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
                                                        <>
                                                            {reports.reportId === '41' ? (
                                                                <ListItemText
                                                                    primary={data?.content[0].name + ': ' + data?.content[0].description}
                                                                    secondary={secondary ? data?.content[0].modifiedDate.toString() : null}
                                                                />
                                                            ) : (
                                                                <ListItemText
                                                                    primary={data?.content[1].name + ': ' + data?.content[1].description}
                                                                    secondary={secondary ? 'Secondary text' : null}
                                                                />
                                                            )}
                                                        </>
                                                    </h3>
                                                </>
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