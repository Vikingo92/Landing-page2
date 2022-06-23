import React from 'react'
import { StyledDiv, Info, Login } from './styles/Access.styled'

const Access = () => {
    return (
        <StyledDiv>

            <Info>
                <h2>Get early access today</h2>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                    questions, our support team would be happy to help you.</p>
                <Login>
                    <input />
                    <button>Get Started for free</button>
                    {/* <Alert>Please enter a valid email address</Alert> */}
                </Login>
            </Info>

        </StyledDiv>
    )
}

export default Access