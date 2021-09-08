import { Box } from '@material-ui/core'
import React from 'react';
import useSWR from 'swr';
import { getallrates } from '../../Api/Api';

const CurrentRates = () => {
    const {data,result,error} = useSWR(getallrates);
    console.log(data.data);

    return (
        <Box>

        </Box>
    )
}

export default CurrentRates
