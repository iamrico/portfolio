import React from 'react'
import '../styles/footer.scss'

const Footer = () =>{
    return (
        <div className='footer'>
            <div className='fItem'><strong>Contact</strong></div>
            <div className='fItem'>@ jerichomesina02@gmail.com</div>
            <div className='fItem'>linkedIn <a style={{"color":'orange'}} href={'https://www.linkedin.com/in/jericho-mesina-7a4a4016b/'}>Jericho Mesina</a></div>
        </div>
    );
}
export default Footer;