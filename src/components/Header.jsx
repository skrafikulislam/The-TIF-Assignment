import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import HeaderImage from "../images/header-image.png";
import VectorImage from "../images/Vector-image-header.png";

const Header = () => {
  return (
    <HearderSection>
      <div className="left-content">
        <div className="logo-image">
          <img src={Logo} alt="Logo Image is Here" />
        </div>
        <div className="content-text">
          <h1>
            Discover the <br /> <span>Best</span> Food <br />
            and Drinks
          </h1>
          <p>
            Naturally made Healthcare Products for the <br /> better care &
            support of your body.
          </p>
          <button>Explore Now!</button>
        </div>
      </div>
      <div className="right-content">
        <img
          className="header-image"
          src={HeaderImage}
          alt="Header Image Here"
        />
        <img
          className="vector-image"
          src={VectorImage}
          alt="Vector Image Here"
        />
        <button>Get In Touch</button>
      </div>
    </HearderSection>
  );
};

export default Header;

const HearderSection = styled.header`
  width: 100%;
  height: 804px;
  display: flex;
  flex: 1;
  background: #ffff;
  @media (max-width: 375px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    & .left-content {
      & .logo-image {
        display: none;
      }
      & .content-text {
        display: flex;
        flex-direction: column;
        h1 {
          font-size: 38px !important;
          line-height: 46px !important;
          font-weight: 600 !important;
        }
        p {
          font-size: 11px !important;
          line-height: 18px !important;
          font-weight: 400 !important;
        }
        button {
          /* width: 120px !important;
          height: 40px !important; */
          padding: 12px 30px !important;
          border-radius: 30px !important;
          font-size: 18.27px !important;
          font-weight: 700 !important;
          line-height: 31.54px !important;
          letter-spacing: 0cap.16px !important;
        }
      }
    }
    & .right-content {
      & .header-image {
        width: 375px !important;
        height: 413px !important;
      }
      & .vector-image {
        position: relative;
        width: 375px !important;
        height: 426px !important;
      }
      button {
        position: absolute;
        font-weight: 800 !important;
        font-size: 11px !important;
        line-height: 36px !important;
        padding: 3px 18px !important;
        top: -26rem !important;
        border: 2px solid #ffff !important;
      }
    }
  }
  & .left-content {
    padding: 20px 0 0 80px;
    flex: 0.5;
    & .logo-image {
      img {
        width: 107px;
        height: 83px;
        margin-bottom: 100px;
      }
    }
    & .content-text {
      display: flex;
      flex-direction: column;
      gap: 40px;
      h1 {
        font-family: "Source Sans 3", sans-serif;
        font-size: 62px;
        font-weight: 700;
        line-height: 69px;
        color: #0e2368;
        span {
          color: #e23744;
        }
      }
      p {
        font-family: "Open Sans", sans-serif;
        font-size: 16.44px;
        font-weight: 400;
        line-height: 27.41px;
        color: #444957;
      }
      button {
        padding: 14px 34px;
        border-radius: 34px;
        background-color: #e23744;
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0.16px;
        border: none;
        width: 190px;
        height: 63px;
        color: #ffffff;
      }
    }
  }

  & .right-content {
    flex: 0.5;
    position: relative;
    img {
      position: absolute;
    }
    & .header-image {
      right: 0;
      width: 735px;
      height: 804px;
    }
    & .vector-image {
      right: 0;
      width: 752px;
      height: 839px;
    }
    button {
      position: relative;
      padding: 3px 22px;
      border-radius: 21px;
      border: 1px solid #ffff;
      font-family: "Source Sans 3", sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 36px;
      letter-spacing: 0.48px;
      color: #ffff;
      background-color: #e23744;
      top: 5%;
      right: -70%;
    }
  }
`;
