import React from 'react';
import NavBar from './components/NavBar';
import {connect} from 'react-redux'
import Banner from './components/Banner';
import fonts from './assets/fonts/fonts.scss';
import ToolBox from './components/Toolbox';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.scss';

const App = ({skills,projects}) => {
  return (
    <div className='home'>
      <div className='container-fluid'>
        <NavBar />
        <Banner />
        <ToolBox />
        <Projects />
        
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {skills: state.skills, projects: state.projects};
}
const MyApp = connect(mapStateToProps)(App);

export default MyApp;
