import React from 'react'
import { Contenido, Image, Subtitulo, Button } from './styles/Principal.styled';


export const Principal = () => {
    return (
        <Contenido>
            <div>
                <Image src='/images/illustration-intro.png' />
                <Subtitulo>
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>Fylo stores all your most important files in one secure location. Access them wherever
                        you need, share and collaborate with friends family, and co-workers.</p>
                    <Button>Get Started</Button>
                </Subtitulo>
            </div>
        </Contenido>
    )
}
