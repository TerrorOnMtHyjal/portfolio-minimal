import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderW = styled.div`
  width: 100%;
  background-color: #1a1a1d;
  margin-bottom: 3em;

  @media screen and (min-width: 1024px){
    background-color: transparent;
    width: 80%;
  }
`;

const ImageW = styled.div`
  box-sizing: content-box;
  width: 100%;

  @media screen and (min-width: 1024px){
    width: 95%;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const sliderSettings = {
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
  responsive: [ 
    { breakpoint: 1024, 
      settings: { 
        slidesToShow: 1
      } 
    }
  ]
}

class ImageSlider extends Component {

  generateImages(images){
    return images.map((image, index) => {
      return (
        <div key={"image" + index}>
          <ImageW>
            <Image src={image}/>
          </ImageW>
        </div>
      )
    })
  }

  render() {
    return (
      <SliderW>
        <Slider {...sliderSettings}>
          {this.generateImages(this.props.images)}
        </Slider>
      </SliderW>
    );
  }
}

export default ImageSlider;