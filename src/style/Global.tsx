import { createGlobalStyle } from 'styled-components'
import "assets/fonts/ProximaNova.css";


const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Proxima Nova";
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    margin : 0px;
    .text-center {
      text-align:center;
    }
    img {
      height: auto;
      max-width: 100%;
    }
    //silde down animations 
    .slide-down {
      animation: slide-down 0.6s linear both;
    }

    @keyframes slide-down {
      0% {
        visibility: hidden;
        height: 0;
      }

      95% {
        visibility: visible;
        height: 250px;
      }

      /* Set height to 'auto' after animation for spacing showing form-invalid feedback message */
      100% {
        visibility: visible;
        height: auto;
      }
    }

    // silde up animation 
    .slide-up {
      animation: slide-up 0.6s linear both;
    }

    @keyframes slide-up {
      from {
        visibility: visible;
        height: 250px;
      }

      to {
        visibility: hidden;
        display : none;
        height: 0;
      }
    }
  }
`

export default GlobalStyle
