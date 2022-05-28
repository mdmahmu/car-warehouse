import { useEffect, useState } from 'react';

const useProducts = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-scrubland-30055.herokuapp.com/cars`)
            .then(res => res.json())
            .then(data => setCars(data));

    }, [cars]);

    return [cars];
};

export default useProducts;