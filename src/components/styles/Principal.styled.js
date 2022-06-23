import styled from 'styled-components';

export const Contenido = styled.div`
    text-align: center;
    align-items:center;
    justify-content: center;
    place-items:center;
    flex-wrap: wrap;
    margin:0 auto;
    display:flex;
    flex-direction: column;


    & > div {
        flex: 1;
    }
    
`

export const Image = styled.img`
    padding-top: 2rem;
    padding-bottom: 5rem;
`

export const Subtitulo = styled.div`
    align-items: center;
    justify-content: center;
    text-align:center;
    place-items:center;
    padding: 0 150px;
    word-wrap:break-word;
    overflow-wrap: break-word;

    h1 { 
        font-size:2.5rem;
        margin-bottom: 2rem;
        line-height: 1.5;
        overflow-wrap: break-word;
        word-wrap:break-word;
        tex-align:center;
    }

    p {
        color: var(--Light);
        font-size: 1.3rem;
        margin-bottom:1rem;
        line-height: 1.4;
        tex-align:center;
        padding: 0 120px;
    }
`

export const Button = styled.button`
    color: var(--White);
    background-color: var(--Blue);
    border: none;
    border-radius: 50px;
    padding: 20px 95px;
    font-weight:700;
    font-size:1rem;
    margin-top:1rem;
    cursor: pointer;
    

    &:hover {
        transform: scale(0.98);
        background-color: var(--Cyan-blue);
    }
`