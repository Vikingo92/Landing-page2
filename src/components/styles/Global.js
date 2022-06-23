import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap');

* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --Dark-blue: hsl(217, 28%, 15%);
    --Dark-background: hsl(218, 28%, 13%);
    --Dark-footer: hsl(216, 53%, 9%);
    --Dark-testimonials: hsl(219, 30%, 18%);

    --Cyan-blue: hsl(176, 68%, 64%);
    --Blue:hsl(198, 60%, 50%);
    --Light-red: hsl(0, 100%, 63%);

    --White: hsl(0, 0%, 100%);
    --Light: hsl(0,0%, 80%);
}

body {
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    color: var(--White);
    justify-content: center;
    text-align:center;
    place-items:center;
    background: url('/images/bg-curvy-desktop.svg') center no-repeat;
    background-size: 100vh;
    background-color: var(--Dark-blue);
}

h1, h2 {
    font-family: 'Raleway', sans-serif;

}

`

export default GlobalStyles;