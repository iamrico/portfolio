import React from "react";
import styled from "styled-components";
import image from "../assets/blur-code.jpg";
import github_logo from '../assets/github.png';

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

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
`
const CodeLink = styled.a`
  color: inherit !important;
  font-family: 'Axiforma-Regular';
  font-size: 14px;
`

const GithubLogo = styled.img`
    width: 17px;
    height: 17px;
    margin-right: 15px;
`

const Slide = () => {
  return (
    <div className="container">
      <Center>
        <Container>
          <Image src={image} />
          <DetailArea>
            <FirstRow>
              <ProjectNumber>01</ProjectNumber>
              <CodeLink><a href='/'><GithubLogo src={github_logo} alt='github_logo' />Code</a></CodeLink>
            </FirstRow>
            <ProjectTitle>Project 1</ProjectTitle>
            <Description>Lorem Ipsum Dolor Sit Amet</Description>
          </DetailArea>
        </Container>
      </Center>
    </div>
  );
};

export default Slide;
