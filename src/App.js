import React from 'react';
import './App.scss';
import { Card } from 'antd';
import {connect} from 'react-redux'
import Footer from './components/Footer'
import ScrollableAnchor from 'react-scrollable-anchor'
import pic1 from "./assets/lakbaysc.PNG";

const App = ({skills,projects}) => {
  return (
    <div className=''>
      <div className="navWrapper">
          <div className="navPiece"><a href={'https://github.com/iamrico'}>GitHub</a></div>
          <div className="navPiece">Contact</div>
          <div className="navPiece"><a href={"https://storage.googleapis.com/portfolio_project/Rico's%20Resume%20(2).pdf"}>Resume</a></div>
          <div className="navPiece"><a href='#section1'>Skills</a></div>
          <div className="navPiece"><a href='#section2'>Personal Projects</a></div>
      </div>
      <div className='navBar'>
        <img className="navBarPic" src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23230763' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23230763' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23230763' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%2339076c' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23230763' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%234d0674' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23230763' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%2361057b' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23230763' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23740382' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23230763' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E"}  ></img>
        <div className="centered"><strong>I am Jericho Mesina</strong></div>
        <div className="navBarPic">
          {/* <div className="name"> 
              <strong>Hi, I'm Jericho Mesina</strong>
          </div> */}
        </div>
      </div>
      <ScrollableAnchor id={'section1'}>
        <div className='myCard'>
          <div className='partOne'>
            <div className='sub'>
                <div className='sectionTitle'><u><strong><p>Skills</p></strong></u></div>
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
                    skills.tools.map(skill=>(<div className='item'><span style={{"color":"#D12095"}}>&#9632;</span> {skill}</div>))
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
      </ScrollableAnchor>
      <ScrollableAnchor id={'section2'}>
        <div className='card2'>
          <div className='partOne'>
    
              <div className="sectionTitle"><u><strong><p>Personal Projects</p></strong></u></div>
                  
          </div>
          {
            projects.map(project => {
              return (
                  <div className="project1" key={project.projId}>
                      <div className="rec1">
                        <img src={pic1} alt={"wtf"} className="imageStyle"/>
                      </div>  
                      <div className="rec2">
                        <div className='description'>
                          <div className='projTitle'>{project.projName}</div>
                          <div className='descStyle'>
                                  {project.description}
                          </div>
                        </div>
                      </div>
                  </div>
              );
            })
          }
        </div>
      </ScrollableAnchor>
      <Footer/>
    </div>
  );
}

const mapStateToProps = state =>{
  return {skills: state.skills,projects: state.projects};
}
const MyApp = connect(mapStateToProps)(App);

export default MyApp;
