import React from 'react';
import { useSelector } from 'react-redux';

const TopProduct = () => {
    const state = useSelector(state => state);
    console.log(state)
    return (
        <div>
            top product
        </div>
    );
};

export default TopProduct;