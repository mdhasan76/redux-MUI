import { Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Paper sx={{display: "flex", alignItems: "center", justifyContent:"center"}}>
            <Typography marginRight={2}>
            <Link to="/">Home</Link>
            </Typography>
            <Typography marginRight={3}  marginTop={2}>
            <Link to="/allproduct">All Product</Link>
            </Typography>
            <Typography marginRight={3}  marginTop={2}>
            <Link to="/toprated">Top Rated</Link>
            </Typography>
            
        </Paper>
    );
};

export default Header;