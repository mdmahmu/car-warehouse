import React, { useEffect, useState } from 'react';

const useProducts = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cars`)
            .then(res => res.json())
            .then(data => setCars(data));

    }, []);

    return [cars];
};

export default useProducts;