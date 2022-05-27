import React from 'react';
import { Button, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useProducts from "../../Shared/Hooks/useProducts";
import Item from "../Item/Item";

const SixItems = () => {

    const [cars] = useProducts();
    const sixItems = cars.slice(-6, cars.length);

    return (
        <div className="bg-dark m-2">
            <div className="container py-2">
                <h1 className="text-white text-center my-4">RECENTLY ADDED</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        !cars ?
                            <div className="text-center my-5" >
                                <Spinner animation="border" variant="warning" />
                            </div> :
                            sixItems.map(item => <Item key={item._id} item={item}></Item>
                            )
                    }
                </Row>
                <div className="text-center my-4">
                    <NavLink to='/inventory'><Button variant="warning" className="px-4 py-2">Manage Inventories</Button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default SixItems;