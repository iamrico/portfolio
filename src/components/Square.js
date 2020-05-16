import React from "react";
import reactIcon from "../assets/Icon_Reactjs.svg";
import styled from "styled-components";
import reactIconWhite from '../assets/Icon_reactjs_white.svg';

const ToolListBoxContent = styled.div`
    min-height: 33.3vw;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.5s linear;
    padding: 20px;

    &:hover {
        background-color: #183A5A;
    }
`;


const Container = styled.div`
`
const Image = styled.img`
  opacity: 1;
  transition: 0.1s linear;

  ${Container}:hover & {
    margin-top: -100px;
    opacity: 0;
    display: none;
  }
`;

const OtherImage = styled.img`
    transition: 0.1s linear;
    opacity: 0;
    display: none;

    ${Container}:hover & {
        
        display: block;
        opacity: 1;
    }
`
const Description = styled.p`
    opacity: 0;
    bottom: 0px;
    transition: 0.1s ease;
    padding-top: 20px;
    font-size: 20px;
    color: white;
    display: none;

    ${Container}:hover &{
        opacity: 1;
        display: block;
    }

`;

const Square = () => {
  return (
    <div className="col-lg-4 col-sm-4 col-xs-6">
      <Container>
        <ToolListBoxContent>
            <Image src={reactIcon} />
            <OtherImage src={reactIconWhite}/>
            <Description>
                React is a library for building composable user interfaces. It
                encourages the creation of reusable UI components, which present data
                that changes over time.
            </Description>
        </ToolListBoxContent>
      </Container>
    </div>
  );
};

export default Square;
