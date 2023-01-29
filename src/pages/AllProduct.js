import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MediaCard from '../components/Card';

const AllProduct = () => {
    
  const [data, setData] = useState([])
  useEffect(() =>{
    fetch('product.json')
    .then(res => res.json())
    .then(data => setData(data))
  },[]);

  const state = useSelector(s => s);
  console.log(state)

    return (
        <Box sx={{
            display: "grid", 
            gridTemplateColumns: "1fr 1fr 1fr", 
            gridGap:20,
            margin: "50px  0",
            justifyItems: "center"

            }}>
            {
                data.map(d => <MediaCard data={d} key={d._id} />)
            }
        </Box>
    );
};

export default AllProduct;