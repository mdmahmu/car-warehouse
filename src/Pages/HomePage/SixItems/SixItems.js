import React from 'react';
import { Button, CardGroup, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useProducts from "../../Shared/Hooks/useProducts";
import Item from "../Item/Item";

const SixItems = () => {

    const [cars] = useProducts();

    return (
        <div className="bg-dark m-2">
            <div className="container py-2">
                <div className="d-flex justify-content-between mt-4 mb-2">
                    <h1 className="text-white">Recently Added</h1>
                    <NavLink to='/inventory'><Button variant="warning" className="px-4 py-2">Manage Inventory</Button></NavLink>
                </div>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        cars.map(item => <Item key={item._id} item={item}></Item>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default SixItems;