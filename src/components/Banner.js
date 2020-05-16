import React from 'react';
import styled from 'styled-components';
import bannerImage from '../assets/banner-image.svg';

const BannerText = styled.p`
    font-size: 70px;
    letter-spacing: -2px;
    line-height: 90px;
    width: 916px;
    color: #183A5A;
    font-family: Axiforma-Bold;
    padding-top: 80px;
    width: 624px;
    padding-left: 60px;
`

const Thin = styled.span`
    font-family: Axiforma-Thin;
`

const Row = styled.div`
    display: flex;
`

const BannerImage = styled.div`
    background-image: url(${bannerImage});
    width: 700px;
    height: 700px;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 auto;
`
const Dot = styled.span`
    color: #C34129;
`

const Banner = () => {
    return (
        <section className='banner'>
            <Row>
                <BannerText>
                    <Thin>Hey there, </Thin>
                    <Thin>I can</Thin> show you what I do <Thin>and get to</Thin> know me more<Dot>.</Dot>
                </BannerText>
                <BannerImage>
                </BannerImage>
            </Row>
            
        </section>
    );
}

export default Banner;