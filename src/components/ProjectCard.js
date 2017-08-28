import React, { Component } from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';
import ProjectStack from './ProjectStack';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/slider.css';


const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  margin: 1em 0;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 95%;
`;

const TopInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;

  & > h2 {
    font-size: 2em;
    margin: 0;
    padding: 0;
  }

  & > h3 {
    font-size: 1em;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
`;

const SliderW = styled.div`
  width: 100%;
`;

const ImageW = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  // background-image: url('${require("../images/pogtracker-2.png")}');
  // background-repeat: no-repeat;
  // background-size: contain;
`;

const sliderSettings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: false
}

class ProjectCard extends Component {
  render() {
    return (
      <Wrap>
        <InnerWrap>
          <TopInfo>
            <h2>{this.props.data.title}</h2>
            <h3>{this.props.data.tagline}</h3>
          </TopInfo>
          <SliderW>
            <Slider {...sliderSettings}>
              <div>
                <ImageW>
                  <Image src={require("../images/pogtracker-2.png")}/>
                </ImageW>
              </div>
              <div>
                <ImageW>
                  <Image src={require("../images/pogtracker-2.png")}/>
                </ImageW>
              </div>
              <div>
                <ImageW>
                  <Image src={require("../images/pogtracker-2.png")}/>
                </ImageW>
              </div>
            </Slider>
          </SliderW>
          <ProjectStack stack={this.props.data.stack}/>
        </InnerWrap>
      </Wrap>
    );
  }
}

export default ProjectCard;