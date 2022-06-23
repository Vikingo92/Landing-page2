import React from 'react'
import { StyledComments, Testimonios, Person } from './styles/Comments.styled'

export const Comments = () => {
    return (
        <StyledComments>
                <Testimonios>
                    <div>
                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                            become a well-oiled collaboration machine.
                        </p>
                    </div>
                    <Person>
                        <img src='/images/profile-1.jpg' alt='' />
                        <div>
                            <h4>Satish Patel</h4>
                            <p>Founder & CEO, Huddle</p>
                        </div>
                    </Person>
                </Testimonios>

                <Testimonios>
                    <div>
                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                            become a well-oiled collaboration machine.
                        </p>
                    </div>
                    <Person>
                        <img src='/images/profile-2.jpg' alt='' />
                        <div>

                            <h4>Bruce McKenzie</h4>
                            <p>Founder & CEO, Huddle</p>
                        </div>
                    </Person>
                </Testimonios>

                <Testimonios>
                    <div>
                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                            become a well-oiled collaboration machine.
                        </p>
                    </div>
                    <Person>
                        <img src='/images/profile-3.jpg' alt='' />
                        <div>
                            <h4>Iva Boyd</h4>
                            <p>Founder & CEO, Huddle</p>
                        </div>
                    </Person>
                </Testimonios>
        </StyledComments>
    )
}
