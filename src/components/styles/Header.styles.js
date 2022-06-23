import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 60px 50px;
    margin: 0 5px;
    font-size: 1rem;
    background-color: var(--Dark-blue);
    background: cover;
    background-size: 100vw;
    
    ul {
        list-style: none;
        display:flex;
        cursor: pointer;
        

        li {
            margin: 0 25px;
            color:var(--Light);

            &:hover {
                color: white;
                border-bottom: 1px solid var(--White);
            }
        }
    }
`

export const Logo = styled.img`

`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

