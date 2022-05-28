import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Row } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
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
        const sold = 1;
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
        if (quantity) {
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
            event.target.reset();
        } else {
            alert('Please input a number');
        }
    };

    return (
        <div className="container">
            <div className="text-center my-4">
                <NavLink to='/inventory'><Button variant="warning" className="px-4 py-2">Manage Inventories</Button></NavLink>
            </div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img src={car.img} alt="item pic" className="w-100" />

                </Col>
                <Col>
                    <h1>{car?.name}</h1>
                    <h6>Supplier: {car?.supplier}</h6>
                    <p>Description: {car?.description}</p>
                    <h5>Price: {car?.price}</h5>
                    <h5>Quantity: {car?.quantity}</h5>
                    <h5>Already Sold: {car?.sold}</h5>

                    <div className="text-center">

                        {
                            car?.quantity === 0 ? <Button variant="warning" className="w-25" disabled>Delivered</Button> : <Button onClick={handleDelivered} variant="warning" className="w-25">Delivered</Button>
                        }


                    </div>
                </Col>
            </Row>
            <Row className="mx-0 my-2  bg-dark py-4">
                <form onSubmit={handleRestock}>
                    <h2 className="text-center text-white">RESTOCK THE ITEM</h2>
                    <div className="text-center">
                        <input type="number" ref={restockRef} placeholder="Restock Quantity" required />
                    </div>
                    <div className="text-center mt-2">
                        <Button variant="btn btn-outline-warning" type="submit">Restock</Button>
                    </div>
                </form>
            </Row>
        </div>
    );
};

export default ItemDetail;