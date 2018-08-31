import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showArrows={true} autoPlay>
                <div>
                    <img src= "../images/yell.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;