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

const Description = styled.div`
    font-family: Axiforma-Regular;
`;

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;

const ProjectTitle = styled.div`
    font-family: Axiforma-Bold;
`;

const ProjectNumber = styled.div`
    font-family: Axiforma-Thin;
`;

const Slide = () => {
  return (
    <div className="container">
      <Center>
        <Container>
          <Image src={image} />
          <DetailArea>
            <ProjectNumber>01</ProjectNumber>
            <ProjectTitle>Project 1</ProjectTitle>
            <Description>Lorem Ipsum Dolor Sit Amet</Description>
          </DetailArea>
        </Container>
      </Center>
    </div>
  );
};

export default Slide;
