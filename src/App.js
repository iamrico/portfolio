import React from 'react';
import './App.scss';
import { Card } from 'antd';
import {connect} from 'react-redux'
import Footer from './components/Footer'

const App = ({skills}) => {
  return (
    <div className='wrapper'>
      <div className='navBar'>
        <div className="navWrapper">
          <div className="navPiece"><a href={'https://github.com/iamrico'}>GitHub</a></div>
          <div className="navPiece">Contact</div>
          <div className="navPiece">Resume</div>
        </div>
        <div className="navBarPic">
          <div className="name"> 
              Hi, I'm Jericho Mesina
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='partOne'>
          <div className='sub'>
              <div>Skills</div>
              <div className='subheader'>Languages</div>
              <div className='list'>
                
                {
                  skills.languages.map(skill=>(<div className='item'><span style={{"color":"#5FC4E5"}}>&#9632;</span> {skill}</div>))
                }
                
              </div>
              <div className='subheader'>Databases</div>
              <div className='list'>
                
                {
                  skills.databases.map(skill=>(<div className='item'><span style={{"color":"#38C18B"}}>&#9632;</span> {skill}</div>))
                }
                
              </div>
              <div className='subheader'>Tools</div>
              <div className='list'>
                
                {
                  skills.tools.map(skill=>(<div className='item'><span style={{"color":"#D12095"}}>&#9632;</span>{skill}</div>))
                }
                
              </div>
              <div className='subheader'>Cloud Technology</div>
              <div className='list'>
                
                {
                  skills.ctech.map(skill=>(<div className='item'><span style={{"color":"#ffe924"}}>&#9632;</span> {skill}</div>))
                }
                
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

const mapStateToProps = state =>{
  return {skills: state.skills};
}
const MyApp = connect(mapStateToProps)(App);

export default MyApp;
