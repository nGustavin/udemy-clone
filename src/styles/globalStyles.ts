import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    
    *{
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
        border: none;
    }

    body{
        font-family: 'Roboto', sans-serif;
        height: 100vh;
        width: 100vw;
        background: #ffffff;
    }
`

