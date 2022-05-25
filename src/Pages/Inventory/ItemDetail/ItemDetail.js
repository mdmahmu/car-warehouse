import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import useProducts from "../../Shared/Hooks/useProducts";

const ItemDetail = () => {

    const { inventoryId } = useParams();
    const restockRef = useRef('');
    // const [cars] = useProducts();
    // const singleCar = cars.find(car => car._id === inventoryId);

    const [car, setCar] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/cars/${inventoryId}`)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [car]);


    const handleDelivered = event => {
        event.preventDefault();
        const quantity = parseInt(car?.quantity);
        const sold = parseInt(car?.sold);
        const updateData = { quantity, sold };
        const url = `http://localhost:5000/cars/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            }
            );
    };

    const handleRestock = event => {
        event.preventDefault();
        const quantity = restockRef.current.value;
        console.log(quantity);
        const updateData = { quantity };
        const url = `http://localhost:5000/cars/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            }
            );
    };


    return (
        <div className="container">
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img src="" alt="" />
                    <div className="text-center">
                        <h4>RESTOCK THE ITEM</h4>
                        <input type="number" ref={restockRef} placeholder="Restock Quantity" required />
                        <div>
                            <Button onClick={handleRestock} variant="primary">Restock</Button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <h1>{car?.name}</h1>
                    <h6>Supplier: {car?.supplier}</h6>
                    <h5>Description: {car?.description}</h5>
                    <h5>Price: {car?.price}</h5>
                    <h5>Quantity: {car?.quantity}</h5>
                    <h5>Already Sold: {car?.sold}</h5>

                    <div className="text-center">
                        <Button onClick={handleDelivered} variant="primary">Delivered</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ItemDetail;