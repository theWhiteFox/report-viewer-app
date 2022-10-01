// 1. list of reports
// 2. sort list by name desc
// 3. report list item name description button open report result table
// 4. billing period sort by date ?
// /api/reports.json contains a list of available reports.
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const ReportsList = (props: any) => {
    const [secondary, setSecondary] = React.useState(false);
    // const { pokemons, loading } = useGetPokemons();

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
                    label="Enable secondary text"
                />
            </FormGroup>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Reports List
                    </Typography>
                    <Demo>
                        {
                            // loading && 
                            // <div>
                            //     <LoadingSpinner />
                            // </div>
                        }
                        <List>
                            {generate(
                                <>
                                    <Link style={{ textDecoration: 'none' }}
                                        to={{
                                            pathname: `${props}`,
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
                                            <ListItemText
                                                primary="Report list item"
                                                secondary={secondary ? 'Secondary text' : null} />
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

export default ReportsList