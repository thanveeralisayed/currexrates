import { AppBar, Box, Container, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme)=>({
    title:{
        flexGrow:1
    }
}))

const Layout = ({children}) => {
    const classes = useStyles();

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} >
                        CurrexRates
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box mt={10}>
            <Container className={classes.container}>
                {children}
            </Container>
            </Box>

        </div>
    )
}

export default Layout
