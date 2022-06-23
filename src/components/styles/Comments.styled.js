import styled from 'styled-components';

export const StyledComments = styled.div`
    display: flex;
    align-items:center;
    text-align: left;
    place-items: center;
    background-color: var(--Dark-background);
    padding: 5rem 5rem;
    font-size: 14px;
    gap: 3rem;
    
`

export const Testimonios = styled.div`
    background-color: var(--Dark-testimonials);
    color: var(--Light);
    padding: 2rem 2rem;

    p {
        color: var(--Light);
        line-height: 1.5;
    }   

    img {
        border-radius: 500px;
        width: 30px;
        height:30px;
    }

`
export const Person = styled.div`
    display: flex;
    padding-top:1.5rem;

    h4 {
        color: var(--White);
    }

    & h4,
    & p {
        padding-left:1rem; 
    }
    
    p {
        font-size: 12px;
    }
`
