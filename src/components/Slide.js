import React from "react";
import styled from "styled-components";
import image from "../assets/blur-code.jpg";
import github_logo from "../assets/github.png";
import Bullet from "../assets/list-bullet.svg";

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
  letter-spacing: 0.5px;
  line-height: 24px;
  font-size: 16px;
`;

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;

const ProjectTitle = styled.div`
  font-family: Axiforma-Bold;
  padding-bottom: 8px;
`;

const ProjectNumber = styled.div`
  font-family: Axiforma-Thin;
  font-size: 16px;
  line-height: 16px;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  align-items: center;
`;
const CodeLink = styled.a`
  color: inherit !important;
  font-family: "Axiforma-Regular";
  font-size: 16px;
  line-height: 16px;
`;

const GithubLogo = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 15px;
  display: block;
`;

const ListBullet = styled.li`
  padding-left: 1em;
  background-image: url(${Bullet});
  background-repeat: no-repeat;
  background-size: 0.25em;
  background-position: 0 10px;
  padding-right: 1em;
`;

const List = styled.ul`
  padding-top: 10px;
  padding-left: 0;
  list-style: none;
  /*default*/
  line-height: 1.5;
  display: flex;
`;

const Group = styled.div`
  display:flex;
  align-items: center;
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
              <Group>
                <div>
                  <GithubLogo src={github_logo} alt="github_logo" />
                </div>
                <div>
                  <CodeLink>Code</CodeLink>
                </div>
              </Group>
            </FirstRow>
            <ProjectTitle>Project 1</ProjectTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </Description>
            <List>
              <ListBullet>React</ListBullet>
              <ListBullet>Firebase</ListBullet>
            </List>
          </DetailArea>
        </Container>
      </Center>
    </div>
  );
};

export default Slide;
