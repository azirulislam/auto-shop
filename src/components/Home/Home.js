import React from 'react';
import { Carousel } from 'react-bootstrap';
import car1 from '../../images/carousel/car1.jpg';
import car2 from '../../images/carousel/car2.jpg';
import car3 from '../../images/carousel/car3.jpg';
import Collections from './Collections/Collections';



const Home = () => {
    return (
        <div>

            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={car1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Audi</h3>
      <p>Our audi collection.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={car2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Marcidis</h3>
      <p>Our marcidis collection.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={car3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Lamborgini</h3>
      <p>Our lamborgini collection.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <Collections></Collections>
      
        </div>
    );
};

export default Home;