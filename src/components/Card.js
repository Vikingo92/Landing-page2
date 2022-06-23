import React from 'react'
import { StyledCard, Flex } from './styles/Card.styled';

export const Card = () => {
    return (
        <StyledCard>

            <Flex>
                <img src='/images/icon-access-anywhere.svg' />
                <h2>Access your files, anywhere</h2>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </Flex>
            <Flex>
                <img src='/images/icon-security.svg' />
                <h2>Security you can trust</h2>
                <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
            </Flex>
            <Flex>
                <img src='/images/icon-collaboration.svg' />
                <h2>Real-time collaboration</h2>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required'</p>
            </Flex>
            <Flex>
                <img src='/images/icon-any-file.svg' />
                <h2>Store any type of file</h2>
                <p>Whether youre sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securelystored and shared.</p>
            </Flex>
        </StyledCard>

       
    )
}
