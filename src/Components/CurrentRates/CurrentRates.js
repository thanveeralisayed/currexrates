import { Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import useSWR from 'swr';
import { getallrates } from '../../Api/Api';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

const CurrentRates = () => {
    const { data, error } = useSWR(getallrates);
    const [selCountry, setSelCountry] = useState('inr');
    const [selCountryData, setSelCountryData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        if (data) {
            const obj = data.data[selCountry];
            const dat = Object.keys(obj).map((key) => [String(key), obj[key]]);
            setSelCountryData(obj);
        }
    }, [data]);

    return (
        <Box display="flex" alignContent="center" flexDirection="column">
            <Paper elevation={10}>
                <Button variant="outlined"
                    style={{ color: 'green' }}
                    color="secondary"
                    fullWidth
                >
                    Exchange Rates
                </Button>
                <Box padding={3} mb={2} mt={1} maxHeight={400} minWidth={250} overflow="auto" className={classes.demo}>
                    <List>
                        {
                            Object.keys(selCountryData).map((key) => (

                                <Box border={1} borderColor="secondary" borderRadius={5}
                                    mt={1}
                                >
                                    <ListItem >
                                        <ListItemText
                                            primary={<Button color="secondary">{String(key)}</Button>}
                                        />

                                        <ListItemSecondaryAction>
                                            <Typography>
                                                {selCountryData[key]}
                                            </Typography>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </Box>


                            ))
                        }


                    </List>
                </Box>
            </Paper>

        </Box>
    )
}

export default CurrentRates
