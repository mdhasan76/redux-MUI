import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Typography marginRight={1}>
            <Link to="/">Home</Link>
            </Typography>
            <Typography marginRight={1}  marginTop={2}>
            <Link to="/allproduct">All Product</Link>
            </Typography>
            <Typography marginRight={1}  marginTop={2}>
            <Link to="/toprated">Top Rated</Link>
            </Typography>
            
        </div>
    );
};

export default Header;