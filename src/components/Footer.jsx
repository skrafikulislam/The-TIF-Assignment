import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterDiv>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="contact">
        <h3>Contact Us</h3>
        <div className="contact-details">
          <p className="p1">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p className="p2">example2020@gmail.com</p>
          <p className="p2">(904) 443-0343</p>
        </div>
      </div>
      <div className="lists-media">
        <div className="lists">
          <h3>More</h3>
          <div className="list-items">
            <ul className="all-items">
              <li>About Us</li>
              <li>Products</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="media">
          <h3>Social Links</h3>
          <div className="media-icons">
            <FiInstagram size={21} />
            <FaTwitter size={21} />
            <FaFacebookF size={21} />
          </div>
          <p>© 2022 Food Truck Example</p>
        </div>
      </div>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.footer`
  width: 100%;
  height: 362px;
  background: linear-gradient(
    90.07deg,
    rgba(30, 42, 93, 0.04) 30.91%,
    rgba(48, 62, 130, 0.04) 64.79%,
    rgba(60, 80, 157, 0.04) 91.94%
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 375px) {
    width: 100%;
    height: 100%;
    padding: 5rem 0 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
    & .logo {
      img {
        width: 75px;
        height: 58px;
      }
    }
    & .contact {
      width: 300px !important;
    }
    & .lists-media {
      width: 300px !important;
      display: flex;
      flex-direction: column;
      gap: 100px;
      & .lists {
      }
      & .media {
        .media-icons {
          text-align: center;
          justify-content: center;
        }
        h3 {
          display: none;
        }
        p {
          position: relative !important;
          bottom: 4rem !important;
          left: 3rem;
         }
      }
    }
  }
  & .logo {
    img {
      width: 161px;
      height: 125px;
    }
  }

  & .contact {
    width: 232px;
    height: 186px;
    h3 {
      font-family: "Source Sans 3", sans-serif;
      font-size: 18.84px;
      font-weight: 600;
      line-height: 27.22px;
      letter-spacing: 0.48px;
      color: #0e2368;
      margin-bottom: 20px;
    }

    & .contact-details {
      width: 232px;
      height: 145px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        font-family: "Source Sans 3", sans-serif;
        font-size: 14.66px;
        font-weight: 400;
        line-height: 23.03px;
        color: #646874;
      }
    }
  }

  & .lists-media {
    width: 438px;
    height: 186px;
    display: flex;
    justify-content: space-between;
    position: relative;

    & .lists {
      h3 {
        font-family: "Source Sans 3", sans-serif;
        font-size: 18.84px;
        font-weight: 600;
        line-height: 27.22px;
        letter-spacing: 0.48px;
        color: #0e2368;
        margin-bottom: 20px;
      }

      & .list-items {
        width: 153px;
        height: 145px;
        & .all-items {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 15px;
          font-family: "Source Sans 3", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 27px;
          color: #646874;
        }
      }
    }
    & .media {
      h3 {
        font-family: "Source Sans 3", sans-serif;
        font-size: 19px;
        font-weight: 600;
        line-height: 27px;
        letter-spacing: 0.48px;
        margin-bottom: 15px;
        color: #0e2368;
      }
      & .media-icons {
        display: flex;
        gap: 40px;
        color: #0e2368;
      }
      p {
        position: absolute;
        bottom: 0;
        width: 197px;
        height: 25px;
        font-family: "Roboto", sans-serif;
        font-size: 14.66px;
        font-weight: 400;
        line-height: 25.12px;
        letter-spacing: 0em;
        color: #828b9c;
      }
    }
  }
`;
