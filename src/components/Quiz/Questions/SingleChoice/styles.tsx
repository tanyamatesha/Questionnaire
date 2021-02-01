import styled from "styled-components"

export const CheckMark = styled.span`
  position: relative;
  height: 1.25rem;
  width: 1.25rem;
  min-width: 1.25rem;

  background-color: #0B5AA2;
  border-radius: 50%;
  border: 1px solid #AFCDE9;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    margin: 0.313rem;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
  }
`

export const Label = styled.label`
  font-size: 0.875rem;
  line-height: 1rem;

  position: relative;
  display: flex;
  align-items: center;
  height: fit-content;
  max-width: 20rem;

  color: #C4DEF7;

  background: #0B5AA2;
  border: 1px solid #1D6FB7;
  border-radius: 0.25rem;

  padding: 0.625rem 1rem;
  margin-bottom: 0.375rem;

  :hover {
    cursor: pointer;
  }

  :hover ${CheckMark}, :focus ${CheckMark} {
    background: #1770C1;
    border: 1px solid #AFCDE9;
  }

  @media screen and (min-width: 948px) {
    font-size: 1.125rem;
    line-height: 1.3125rem;

    max-width: 20rem;

    padding: 0.75rem 1.125rem;
    margin-bottom: 0.5rem;
  }
`

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  :checked ~ ${CheckMark}:after {
    display: block;
    background: #AFCDE9;
  }
`
