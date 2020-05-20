import React, {Component} from "react";
import styled from "styled-components";
import Square from "../components/Square.js";
import { connect } from 'react-redux'

const ToolContainer = styled.div`
  height: 300px;
  width: 300px;
  background-color: #f4f4f4;
`;

const Title = styled.h2`
  font-family: Axiforma-Bold;
  line-height: 50px;
  color: #183a5a;
  font-size: 34px;
  letter-spacing: 1.5px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 49px;
  margin-top: 84px;
`;

const Center = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
class ToolBox extends Component{

  componentDidMount () {
      console.log(this.props);
  }

  renderTools = () => {
    return this.props.tools.map((tool)=>{
        
    })
  }
  render() {
    
    return (
      <section className="toolbox">
        <div className="container-fluid">
          <Title>My Tools</Title>
          <div className="row no-gutters">
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({skills}) => {
    return {
        tools: skills.tools,
    }
}
export default connect(mapStateToProps)(ToolBox);
