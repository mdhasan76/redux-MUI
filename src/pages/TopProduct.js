import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import MediaCard from '../components/Card';

const TopProduct = () => {
    const state = useSelector(state => state);
    // console.log(state)
    return (
        <Box sx={{
            display: "grid", 
            gridTemplateColumns: "1fr 1fr 1fr", 
            gridGap:20,
            margin: "50px  0",
            justifyItems: "center"

            }}>
            {
                state.cart.map(d => <MediaCard key={d._id} data={d} />) 
            }
        </Box>
    );
};

export default TopProduct;