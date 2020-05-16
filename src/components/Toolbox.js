import React from 'react';
import styled from 'styled-components';
import Square from '../components/Square.js';

const ToolContainer = styled.div`
    height: 300px;
    width: 300px;
    background-color: #F4F4F4;
`

const Title = styled.h2`
    font-family: Axiforma-Bold;
    line-height: 50px;
    color: #394247;
    font-size: 34px;
    letter-spacing: 1.5px;
    line-height: 50px;
    text-align: center;
    margin-bottom: 49px;
    margin-top: 84px;
`

const Center = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 100%;
    display:block;
    margin-left: auto;
    margin-right: auto;
`
const ToolBox = () => {
    return (
        <section className='toolbox'>
            <div className='container-fluid'>
                <Title>My Tools</Title>
                <div className='row no-gutters'>
                    <Square></Square>
                    <Square></Square>
                    <Square></Square>
                </div>
            </div>
        </section>
    );
}

export default ToolBox;