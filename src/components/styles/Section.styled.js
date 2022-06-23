import styled from 'styled-components';

export const StyledSection = styled.div`
    background-color: var(--Dark-background);
    display:flex;
    align-items: center;
    justify-content:center;
    text-align:left;
    gap:2rem;
    padding: 2rem 2rem;
    word-wrap:break-word;
    line-height:1.5;

   

`
export const Text = styled.div`
    justify-content:left;
    align-items:center;

    h2 {
        font-size: 2rem;
        padding-right:9rem;    
    }

    p {
        color:var(--Light);
        padding: 10px 0;
        padding-right:1.9rem;
        font-size:1rem;
    }
`

export const A = styled.a`
    color: var(--Cyan-blue);
    font-size:1rem;
    justify-content:space-around;

    &:hover {
        color: white;
        border-bottom: 1px solid var(--White);
    }
`

