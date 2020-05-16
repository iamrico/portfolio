import React from 'react';
import styled from 'styled-components';


const Nav = styled.header`
    height: 128px;
    display: flex;
    justify-content: flex-end;
`
const NavItem = styled.h3`
    display: inline-block;
    font-family: Axiforma-Medium;
    color: #183A5A;
    padding-left: 35px;
`

const NavItemContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`

const NavBar = (props) => {
    return (
        <Nav>
            <NavItemContainer>
                <NavItem>GitHub</NavItem>
                <NavItem>Tools</NavItem>
                <NavItem>Projects</NavItem>
                <NavItem>About Me</NavItem>
            </NavItemContainer>
        </Nav>
    );
}

export default NavBar;