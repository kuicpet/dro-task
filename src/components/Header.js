import React from 'react';
import styled from "styled-components";
import logo from "../images/logo-768x138.png";

export default function Header() {
    return (
        <Nav>
            <Img src={logo} alt="DRo Health" />
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    z-index: 100;
    position: sticky;
    top: 0;
    left: 0;
`
const Img = styled.img`
width: 200px;
margin-left: 1rem;
vertical-align: middle;
max-width: 110%;
`
