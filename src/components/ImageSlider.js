import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderW = styled.div`
  width: 100%;
  background-color: #1a1a1d;
  margin-bottom: 3em;
`;

const ImageW = styled.div`
  box-sizing: content-box;
  width: 100%;
  padding-right: 2em;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const sliderSettings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: false
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