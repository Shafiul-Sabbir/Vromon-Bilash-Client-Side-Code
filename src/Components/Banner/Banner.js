import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/N7ynJYK/ass11ban2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Enjoy Your Own Life by Travelling</h3>
      <p>Life Without Travelling is like a food without Salt.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/9YpCYn4/ass11ban3.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Enjoy Your Own Life by Travelling</h3>
      <p>Life Without Travelling is like a food without Salt.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/C6gydyS/ass11ban1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Enjoy Your Own Life by Travelling</h3>
      <p>Life Without Travelling is like a food without Salt.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;