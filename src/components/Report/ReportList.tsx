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
import ListItemReportText from './ListItemReportText'
import { useGetReportListQuery, useGetReportQuery } from '../../services/report'
import DateTimePickers from './BasicDateRangePicker'

const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
    console.log(key);
}
const item = [1, 2, 3, 4]

function generate(element: React.ReactElement) {
    return item.map((value: any) =>
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

    const { data, error, isLoading } = useGetReportListQuery('')

    // console.log(data)

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
                    label="Show last modified"
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
                                            pathname: `${41}-${201708}.json`,
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
                                                    <ListItemReportText />
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