import { Box } from '@material-ui/core'
import React from 'react'
import CurrentRates from '../CurrentRates/CurrentRates'

const Home = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex-start">
                Check Currency rates
            </Box>

            <Box alignSelf="flex-end">
                <CurrentRates/>
            </Box>

        </Box>
    )
}

export default Home
