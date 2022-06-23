import React from 'react'
import { StyledFooter, DivFooter, Icons } from './styles/Footer.styled'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <>
            <DivFooter>
                <StyledFooter>
                    <img src='/images/logo.svg' alt='' />
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </li>
                    </ul>

                    <ul>
                        <li>+1-543-123-4567</li>
                        <li>example@fylo.com</li>
                    </ul>

                    <ul>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>

                    <ul>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>

                    <Icons>
                        <ul>
                            <li>
                                <a  href='http://localhost:3000/'>
                                <FaFacebook />
                                </a>
                            </li>

                            <li>
                                <a  href='http://localhost:3000/'>
                                <FaTwitter />
                                </a>
                            </li>

                            <li>
                                <a href='http://localhost:3000/'>
                                <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </Icons>
                </StyledFooter>
            </DivFooter>
        </>

    )
}
