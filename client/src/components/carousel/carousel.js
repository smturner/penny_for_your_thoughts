import React, {useState} from 'react';
import {Carousel,  CarouselGroup} from 'react-bootstrap'
import Penny from '../../images/penny3.jpg'
import Penny1 from '../../images/penny4.jpg'
import Penny2 from '../../images/penny5.jpg'


function HomeCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      // <Carousel activeIndex={index} onSelect={handleSelect}>
      //   <Carousel.Item>
      <Carousel className="carousel" fade>
  <Carousel.Item interval={1200}>
          <img
            className="d-block h-25! w-100"
            src={Penny}
            alt="First slide"
          />
          <Carousel.Caption >
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src={Penny1}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src={Penny2}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p>
              
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default HomeCarousel;