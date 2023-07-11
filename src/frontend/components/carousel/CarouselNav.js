import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselNav() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../../assets/images/bg.jpg")}
          alt="First slide"
        />
        <Carousel.Caption style={{backgroundColor: "black", opacity:"50%", textAlign:"left", width:"450px"}}>
          <h1 style={{fontSize:"18px"}}>THIS IS A PLACE WHERE TECHNOLOGY &amp; <br />CREATIVITY FUSED INTO DIGITAL CHEMISTRY</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../../assets/images/about-bg.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption style={{backgroundColor: "black", opacity:"50%", textAlign:"left", width:"450px"}}>
          <h1 style={{fontSize:"18px"}}>WE DON'T HAVE THE BEST BUT WE HAVE THE <br />GREATEST TEAM</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselNav;
