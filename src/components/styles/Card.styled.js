import styled from 'styled-components';

export const StyledCard = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: var(--Dark-background);
    align-items:center;
    justify-content:center;
    place-items:center;
    padding: 5rem 9rem;
    word-wrap:break-word;
    gap: 5rem;

   
`
export const Flex = styled.div`
    padding: 1rem 30px;
    align-items:center;
    place-items:center;

    & > img, 
    & > h2 {
        padding: 1rem 0;
    }

    p {
        font-size: 1rem;
        color: var(--Light);
        padding: 0.5rem 0;
    }
`