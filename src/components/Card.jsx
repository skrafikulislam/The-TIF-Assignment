import React from "react";
import styled from "styled-components";


const Cards = ({ heading1, image }) => {
  return (
    <Card>
      <div className="content">
        <img src={image} alt="Image Of The Dish" />

        <div className="description">
          <h1>{heading1}</h1>
          <p>
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard...
          </p>
          <button>Read More</button>
        </div>
      </div>
    </Card>
  );
};

export default Cards;
// This goona be into article semantic
const Card = styled.div`
  width: 381px;
  height: 554px;
  border-radius: 20.94px;
  border: 1.37px solid #a2aed5;
  & .content {
    padding: 25px 28px;
    img {
      width: 326px;
      height: 257px;
      margin-bottom: 25px;
    }
  }
  & .description {
    width: 295.02px;
    height: 194.52px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1 {
      color: #0e2368;
      font-weight: 700;
      font-size: 21px;
      line-height: 27px;
      font-family: "Poppins", sans-serif;
    }
    p {
      font-family: "Open Sans", sans-serif;
      font-size: 15px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: -0.02em;
      text-align: left;
    }
    button {
      width: 131px;
      height: 42px;
      padding: 3px, 26px, 3px, 26px;
      border-radius: 21px;
      border: 1px solid #424961;
      margin-top: 25px;
      background-color: #ffff;
      font-family: "Source Sans 3", sans-serif;
      font-size: 16.44px;
      font-weight: 600;
      line-height: 35.59px;
      letter-spacing: 0.48px;
      color: #424961;
    }
  }
`;
