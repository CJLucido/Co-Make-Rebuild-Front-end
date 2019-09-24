import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #333333;
    @media (max-width: 500px) {
        padding: 1rem 0;
        flex-direction: column;
    }
    a {
        margin: 1rem 2rem;
        text-decoration: none;
        color: #333333;
        @media (max-width: 500px) {
            margin: 0.5rem;
        }
        &:hover {
            color: #9A9A9A;
        }
    }
`;

export default function NavBar () {
    return (
        <StyledDiv>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/issues'>Issues</NavLink>
            <NavLink to='/'>Logout</NavLink>
        </StyledDiv>
    )
}