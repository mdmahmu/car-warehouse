import React from 'react';
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EachItem = ({ car }) => {
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/inventory/${id}`);
    };

    const handleDelete = (id) => {
        const deleteConfirmation = window.confirm("Do you really want to delete?");
        if (deleteConfirmation) {
            const url = `https://shielded-scrubland-30055.herokuapp.com/cars/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                }
                );
        }
    };

    return (
        <div className="container my-3">
            <Card className="bg-dark text-white">
                <Row className="g-4">
                    <Col sm={4}>
                        <Card.Img variant="top" src={car.img} />
                    </Col>
                    <Col sm={6}>
                        <Card.Body>
                            <Card.Title className="text-start">{car.name}</Card.Title>
                            <Card.Text className="text-start text-truncate">
                                {car.description}
                            </Card.Text>
                            <Card.Text className="text-start">
                                <small>Supplier: {car.supplier}</small>
                            </Card.Text>
                            <Card.Text className="text-start">
                                Price: ${car.price}
                            </Card.Text>
                            <Card.Text className="text-start">
                                Quantity: {car.quantity}
                            </Card.Text>
                            <Card.Text className="text-start">
                                Already sold: {car.sold}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col sm={2} className="mt-0 pt-2 pb-4 d-flex align-items-center justify-content-center flex-column">
                        <Row className="text-center w-75">
                            <Button variant="outline-warning" className="px-2 py-2 mb-4" onClick={() => navigateToItemDetail(car._id)}>Update</Button>
                        </Row>
                        <Row className="text-center w-75">
                            <Button variant="outline-warning" className="px-2 py-2" onClick={() => handleDelete(car._id)}>Delete</Button>
                        </Row>

                    </Col>
                </Row>
            </Card>
        </div>


















        // <div className="card mb-3">
        //     <div className="row g-0">
        //         <div className="col-md-4">
        //             <img src={car.image} className="img-fluid rounded-start" alt="item pic" /></div>
        //         <div className="col-md-8">
        //             <div className="card-body">
        //                 <h5 className="card-title">Card title</h5>
        //                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default EachItem;