import React from 'react';
import { Carousel } from "react-bootstrap";
import banner1 from '../../../Images/Banner/banner1.png';
import banner2 from '../../../Images/Banner/banner2.png';
import banner3 from '../../../Images/Banner/banner3.png';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Best Car Warehouse</h3>
                        <p>Unlock the potential</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Stunning Electric Car</h3>
                        <p>Your future car</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Go Anywhere With Your SUVs</h3>
                        <p>Comfortable driving</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;