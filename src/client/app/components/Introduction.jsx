import React from 'react';
import { Carousel } from 'react-bootstrap';


const Introduction = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img width={1280} height={720} alt="1280x720" src="../../../images/Bear.jpg" />
        <Carousel.Caption>
          <h3>We love what we do!</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1280} height={720} alt="1280x720" src="../../../images/Tiger.jpeg" />
        <Carousel.Caption>
          <h3>Quality over quantity!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1280} height={720} alt="1280x720" src="../../../images/Eagle.jpg" />
        <Carousel.Caption>
          <h3>Ranked #1 in the industry!</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Introduction;
