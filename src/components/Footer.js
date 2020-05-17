import React from 'react';
import '../styles/footer.scss';
import linkedin_logo from '../assets/linkedin.png';
import styled from 'styled-components';

const LinkedInLogo = styled.img`
    width: 17px;
    height: 17px;
    margin-right: 15px;
`

const Footer = () =>{
    return (
        <footer className='footer'>
            <div className='fItem'><strong>Contact Me</strong></div>
            <div className='fItem'><a href='mailto:jerichomesina02@gmail.com'>@ jerichomesina02@gmail.com</a></div>
            <div className='fItem'><LinkedInLogo src={linkedin_logo}/><a href={'https://www.linkedin.com/in/jericho-mesina-7a4a4016b/'}>Jericho Mesina</a></div>
        </footer>
    );
}
export default Footer;