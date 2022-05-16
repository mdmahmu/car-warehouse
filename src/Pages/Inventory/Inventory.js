import React from 'react';
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Inventory = () => {
    return (
        <div className="text-center">
            <h2>INVENTORY</h2>
            <Button variant="warning" as={NavLink} to='/adding_items'>Add New Item</Button>
        </div>
    );
};

export default Inventory;