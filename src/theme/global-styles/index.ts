import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
	h1,h2,h3,h4,h5,h6,p {
		padding: 0;
		margin: 0;
	}
  html {
    max-width: 100%;
    overflow-x: hidden;
  }
	body {
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif; 
    overflow-x: hidden;
	  margin: 0;
    color: #EBF4FC;;
    min-width: 375px; /* Lock at 375 min and zoom viewport to fit for smaller devices */
    background: linear-gradient(74.12deg, #013E76 0%, #126DC1 100%);
	}
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    cursor: pointer;
    user-select: none;
    font: inherit;
    line-height: normal;
    :focus {
      outline-color: none;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
      animation: none !important;
    }
  }
`
