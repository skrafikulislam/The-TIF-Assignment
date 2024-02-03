import React from "react";
import styled from "styled-components";
import { SectionImage } from "../images/SliderImages";

const AboutSection = () => {
  return (
    <About>
      <div className="no-contents"></div>
      <div className="contents">
        <div className="image">
          <img src={SectionImage} alt="Section Image Here" />
        </div>
        <div className="about">
          <h1>About Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>

          <button>Read More</button>
        </div>
      </div>
    </About>
  );
};

export default AboutSection;

const About = styled.section`
  width: 100%;
  height: 653px;
  @media (max-width: 375px) {
    width: 100%;
    height: 516px;
    margin-top: 60px;
    padding: 100px 44px;
    background: linear-gradient(
      90.07deg,
      rgba(30, 42, 93, 0.04) 30.91%,
      rgba(48, 62, 130, 0.04) 64.79%,
      rgba(60, 80, 157, 0.04) 91.94%
    ) !important;
    & .no-contents {
      display: none;
    }
    & .contents {
      width: 275px !important;
      height: 300px !important;
      background: none !important;
      & .image {
        display: none;
      }
      & .about {
        text-align: center;
        h1 {
          font-size: 26px !important;
          margin-bottom: 30px !important;
        }
        p {
          font-size: 11px !important;
          font-weight: 400 !important;
          text-align: center !important;
          line-height: 21px !important;
          margin-bottom: 30px !important;
        }
        button {
          padding: 4px 33px;
        }
      }
    }
  }
  & .no-contents {
    width: auto;
    height: calc(100% - 467px);
    background-color: #ffffff;
  }
  & .contents {
    width: auto;
    height: 467px;
    display: flex;
    justify-content: space-evenly;
    background: linear-gradient(
      90.07deg,
      rgba(30, 42, 93, 0.04) 30.91%,
      rgba(48, 62, 130, 0.04) 64.79%,
      rgba(60, 80, 157, 0.04) 91.94%
    );

    & .image {
      img {
        width: 384px;
        height: 468px;
      }
    }

    & .about {
      width: 447px;
      height: 254px;
      margin-top: 8%;
      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 45px;
        font-weight: 600;
        line-height: 27px;
        color: #0e2368;
        margin-bottom: 20px;
      }
      p {
        font-family: "Open Sans", sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 27px;
        color: #444957;
        margin-bottom: 15px;
      }
      button {
        background: #e23744;
        padding: 3px 26px;
        border-radius: 21px;
        gap: 10px;
        border: none;
        font-family: "Source Sans 3", sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: 0.48px;
        color: #ffffff;
      }
    }
  }
`;
