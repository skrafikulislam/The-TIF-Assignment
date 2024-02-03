import React, { useState } from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Card";
import styled from "styled-components";
import {
  Slider1,
  Slider2,
  Slider3,
  Slider4,
  Slider5,
  Slider6,
} from "../images/SliderImages";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}></div>
  );
};

const SliderCarousal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const demoData = [
    {
      items: [
        { id: 1, image: `${Slider1}`, title: "Grilled  Tomatoes at Home" },
        { id: 2, image: `${Slider2}`, title: "Snacks for Travel" },
        { id: 3, image: `${Slider3}`, title: "Post-workout Recipes" },
      ],
    },
    {
      items: [
        { id: 4, image: `${Slider4}`, title: "How To Grill Corn" },
        { id: 5, image: `${Slider5}`, title: "Crunchwrap Supreme" },
        { id: 6, image: `${Slider6}`, title: "Broccoli Cheese Soup" },
      ],
    },
  ];
  return (
    <SliderSection>
      <div className="card-container">
        <h1 className="card-heading-text">Latest Articles</h1>
        <div className="card-slide">
          <Test>
            <Slider {...settings}>
              {demoData.map((slide, index) => (
                <div key={index} className="text-center">
                  <Card>
                    {slide.items.map((item, i) => (
                      <Cards key={i} heading1={item.title} image={item.image} />
                    ))}
                  </Card>
                </div>
              ))}
            </Slider>
            <NumberSlide>
              <h3 className="slider-num">
                {" "}
                {currentSlide + 1}/{demoData.length}
              </h3>
            </NumberSlide>
          </Test>
        </div>
      </div>
    </SliderSection>
  );
};

export default SliderCarousal;

const SliderSection = styled.article`
  width: 100%;
  height: 995px;
  padding: 10rem 6rem;
  background: #ffff;
  @media (max-width: 375px) {
    width: 100% !important;
    height: auto !important;
    padding-left: 0 !important;
    & .card-container {
      & .card-heading-text {
        font-size: 28px !important;
        font-weight: 600 !important;
        line-height: 54px !important;
        letter-spacing: 0.64px !important;
      }
    }
  }
  & .card-container {
    width: 1225px;
    height: 679px;
    display: flex;
    flex-direction: column;
    flex: 1;
    & .card-heading-text {
      font-family: "Source Sans 3", sans-serif;
      font-size: 56px;
      font-weight: 600;
      line-height: 42px;
      letter-spacing: 0.64px;
      color: #0e2368;
      flex: 0.2;
    }
    & .card-slide {
      flex: 0.8;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Test = styled.div`
  width: 1225px;
  height: 579px;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumberSlide = styled.div`
  text-align: center;
  margin-top: 10px;
  & .slider-num {
    font-size: 22px;
    color: #424961;
    font-weight: 400;
    line-height: 27.22px;
  }
`;
