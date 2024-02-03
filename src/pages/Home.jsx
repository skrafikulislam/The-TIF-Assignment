import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import SliderCarousal from "../components/Slider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <LandingPage>
      <Header />
      <AboutSection />
      <SliderCarousal />
      <Footer />
    </LandingPage>
  );
};

export default Home;

const LandingPage = styled.div`
  width: 1440px;
  height: auto;
  margin: auto;
  @media (max-width: 375px){
    width: 375px;
    height: auto;
  }
`;
