import React from 'react'
import { StyledHeader, Logo, Nav } from './styles/Header.styles'
import { Principal } from './Principal';

export const Header = () => {
    return (
        <StyledHeader>
            <Nav>
                <Logo src='./images/logo.svg' />

                <ul>
                    <li>Features</li>
                    <li>Team</li>
                    <li>Sign in</li>
                </ul>
            </Nav>

            <Principal />
        </StyledHeader>
    )
}
