import React from 'react';
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/inventory/${id}`);
    };

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>

                    <div className="text-center">
                        <Button onClick={() => navigateToItemDetail(item._id)} variant="primary">Update</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;