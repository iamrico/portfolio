import React from "react";
import styled from "styled-components";
import image from "../assets/blur-code.jpg";

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const DetailArea = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 20px;
`;

const Description = styled.div``;

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;
const Slide = () => {
  return (
    <div className="container">
      <Center>
        <Container>
          <Image src={image} />
          <DetailArea>
            <div>01</div>
            <div>Project 1</div>
            <Description>Lorem Ipsum Dolor Sit Amet</Description>
          </DetailArea>
        </Container>
      </Center>
    </div>
  );
};

export default Slide;
