import React from 'react';
import './App.scss';
import { Card } from 'antd';
import {connect} from 'react-redux'

const App = ({skills}) => {
  return (
    <div className='wrapper'>
      <div className='navBar'>
        <div className="navWrapper">
          <div className="navPiece">GitHub</div>
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
                  skills.languages.map(skill=>(<div className='item'>&#9632; {skill}</div>))
                }
                
              </div>
              <div className='subheader'>Databases</div>
              <div className='list'>
                
                {
                  skills.databases.map(skill=>(<div className='item'>&#9632; {skill}</div>))
                }
                
              </div>
              <div className='subheader'>Tools</div>
              <div className='list'>
                
                {
                  skills.tools.map(skill=>(<div className='item'>&#9632; {skill}</div>))
                }
                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state =>{
  return {skills: state.skills};
}
const MyApp = connect(mapStateToProps)(App);

export default MyApp;
