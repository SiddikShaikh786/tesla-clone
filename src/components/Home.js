import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Customer Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Customer Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Customer Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Customer Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost of Solar Panel in India"
        description="Money Back Guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar Panel for new Roofs"
        description="Solar Roofs costs is less than  New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
        rightBtnText=""
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
