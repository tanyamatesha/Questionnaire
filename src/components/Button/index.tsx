import React from "react"
import styled, { css } from "styled-components"

type ButtonSizing = "md" | "lg" | "stretch"
type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, "width"> & {
  sizing?: ButtonSizing
}

const SIZING_CSS = css<{ sizing?: ButtonSizing }>`
  ${props => {
    switch (props.sizing) {
      case "lg":
        return `padding: 0.75rem 1.5rem;`
      case "stretch":
        return `
              width: 100%;
              padding: 0.75rem 0;
              `
      case "md":
      default:
        return `padding: 0.625rem 1.5rem;`
    }
  }}
`

const Button = styled.button<ButtonProps>`
  display: inline-block;
  width: fit-content;
  white-space: nowrap;

  ${SIZING_CSS}

  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.4375rem;

  border-radius: 0.25rem;
  border-width: 0;

  text-align: center;
  text-decoration: none;

  margin-top: 1.5rem;
  margin-bottom: 1rem;

  background: #CDC047;
  color: #1B1B1B;

  &:hover, &:focus {
    cursor: pointer;
    background: #BAA90E;
    outline: none;
  }

  &:active {  
    background: #BAA90E;
    box-shadow: inset 0.25rem 0.25rem 0.75rem #8B7E08;
  }
`

Button.defaultProps = {
  type: "button",
  sizing: "md"
}

export default Button
