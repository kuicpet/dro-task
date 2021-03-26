import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Hero() {
    return (
        <Wrapper>
            <div>
                <h1>The Complete <br/>Healthcare Solution</h1>
                <p>The DRO Health platform makes it possible for anyone <br/>
                    with a smart device to access quality, affordable <br/> healthcare.</p>
            </div>
            <div>
                <Link to="/signup" className="start signup">Get Started</Link>
                <Link to="/signin" className="start signin">Sign in</Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: left;

    div {
        margin: 1rem;
    }

    .start {
        align-items: left;
        text-decoration: none;
        margin: 2rem 1rem;
        padding: 0.5rem 2rem;
        border: 2px solid #9F5DE2;
        color: #9F5DE2;
    }

    .signup {
        background-color: #9F5DE2;
        color: #fff;
        &:hover {
            background-color: black;
            border-color: black;
        }
    }

    .signin {
        color: black;
        border-color: black;
        &:hover {
            background-color: black;
            color: #fff;
        }
    }
`