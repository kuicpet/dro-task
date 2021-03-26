import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        errors: {}
    };

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password
        };

        console.log(userData);
    };

    render() {
        const { errors } = this.state;

        return (
            <Wrapper>
                <h1>
                    <b>Login</b>
                </h1> 
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="input">
                        <div>
                            <label htmlFor="username">Username</label>
                        </div>
                        <input  
                            onChange={this.onChange}
                            value={this.state.username}
                            error={errors.username}
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                            
                    </div>    
                    <div className="input">
                        <div>
                            <label htmlFor="password">Password</label>
                        </div>
                        <input  
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            placeholder="Password"
                        />   
                    </div> 
                    <div>
                        <button type="submit">
                            Login    
                        </button>    
                    </div>  
                </form>
                <p>
                    Don't have an account? <Link to="/signup">Register</Link>    
                </p>       
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: left;

    h1 {
        color: #9F5DE2;
        font-weight: 100;
    }
    form {
        width: 400px;
        max-width: 90%;
        padding: 1rem;
    }

    .input {
        margin: 1rem 0;
    }

    input {
        width: 100%;
        height: 1.8rem;
        font-size : 1.1rem;
        padding: 0.2rem;
        margin: 0 auto;
        border: 1px solid #9F5DE2;
        font-weight: 100;
    }

    label {
        font-size: 1.1rem;
        padding: 0.1rem;
        color: #9F5DE2;
    }
    
    button {
        width: 12rem;
        margin: 1rem 0;
        font-size: 1.2rem;
        border: 1px solid #9F5DE2;
        font-weight: 100;
        padding: 0.3rem;
        background-color: #9F5DE2;
        font-weight: 100;
        color: #fff;
    }
`
