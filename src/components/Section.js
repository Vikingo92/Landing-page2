import React from 'react'
import { StyledSection, Text, A } from './styles/Section.styled';
import {ArrowCircleRightIcon} from '@heroicons/react/solid'

export const Section = () => {
    return (
        <StyledSection>
            <div>
                <img src='/images/illustration-stay-productive.png' />
            </div>

            <Text>
                <h2>Stay productive, wherever you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.
                </p>
                <p>
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email
                    attachments required.
                </p>
                <A>
                    See how Fylo works
                    <ArrowCircleRightIcon width='20'/>
                </A>
            </Text>
        </StyledSection>
    )
}
