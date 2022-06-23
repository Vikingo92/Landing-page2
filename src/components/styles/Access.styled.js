import styled from 'styled-components';

export const StyledDiv = styled.div`
    padding: 6rem 12rem;
    line-height: 1.5;
    
    h2 {
        
        font-size: 2rem;
    }
    `
    export const Info = styled.div`
    padding: 3rem 2rem;
    background-color: var(--Dark-blue);
    
    p {
        font-size: 1rem;
        padding: 1rem 4rem;
        color: var(--Light);
    }
    
    
    input {
        padding: 20px;
        width: 500px;
        margin-right: 30px;
        border: none;
        border-radius:50px;
        
    }
    
    button {
        color: var(--White);
        background-color: var(--Blue);
        border: none;
        border-radius: 50px;
        padding: 20px 60px;
        font-weight:700;
        font-size:1rem;
        margin-top:1rem;
        cursor: pointer;
        

        &:hover {
            transform: scale(0.98);
            background-color: var(--Cyan-blue);
        }
    }
`
export const Login = styled.div`
   
    align-items: center;
    text-align: center;
    justify-content: space-between;

`
export const Alert = styled.h3`
    color: var(--Light-red);

`