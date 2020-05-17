import React from 'react'
import '../styles/footer.scss'

const Footer = () =>{
    return (
        <footer className='footer'>
            <div className='fItem'><strong>Contact Me</strong></div>
            <div className='fItem'><a href='mailto:jerichomesina02@gmail.com'>@ jerichomesina02@gmail.com</a></div>
            <div className='fItem'>linkedIn <a href={'https://www.linkedin.com/in/jericho-mesina-7a4a4016b/'}>Jericho Mesina</a></div>
        </footer>
    );
}
export default Footer;