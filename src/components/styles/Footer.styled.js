import styled from 'styled-components'

export const DivFooter = styled.div`

    img {
        width: 90px;
        height:30px;
        transform: translateY(-50px) translateX(90px);
    }

     
`

export const StyledFooter = styled.footer`
    display: flex;
    align-items: top;
    text-align:left;
    color: var(--Light);
    background-color: var(--Dark-footer);
    padding: 100px 60px 10px;

        & > div,
        & > ul {
            flex: 1;
            margin-left: 2rem;
        }

        ul {
            list-style: none;
            
            li {
                cursor:pointer;

                &:hover {
                    color: var(--White);
                }
            }
        }

        `
        
export const Icons = styled.div`

    display: flex;

        a {
            boder: 1px solid white;
            border-radius: 50%;
            text-decoation: none;
        }    

`