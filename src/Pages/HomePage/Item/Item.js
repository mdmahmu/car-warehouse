import React from 'react';
import { Button, Card, Col, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/inventory/${id}`);
    };

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text className="text-start text-truncate mb-0">{item.description}</Card.Text>
                    <Card.Text className="text-start m-0">
                        <small>Supplier: {item.supplier}</small>
                    </Card.Text>
                    <Card.Text className="text-start m-0">
                        Price: ${item.price}
                    </Card.Text>
                    <Card.Text className="text-start m-0">
                        Quantity: {item.quantity}
                    </Card.Text>
                    <Card.Text className="text-start">
                        Already sold: {item.sold}
                    </Card.Text>

                    <div className="text-center">
                        <Button onClick={() => navigateToItemDetail(item._id)} variant="dark" className="px-4">Update</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;