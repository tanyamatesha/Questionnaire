import styled from "styled-components"

export const CheckMark = styled.span`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  min-width: 1.5rem;

  border: 1px solid #AFCDE9;
  border-radius: 2px;

  &::after {
    content: "";
    display: none;
    width: 10px;
    height: 6px;
    position: absolute;
    left: 6px;
    top: 6px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    transform: rotate(-45deg);
  }
`

export const Label = styled.label`
  font-size: 14px;
  line-height: 16px;

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
    font-size: 18px;
    line-height: 21px;

    min-width: 18rem;s

    padding: 0.75rem 1.125rem;
    margin-bottom: 0.5rem;
  }
`

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  :checked ~ ${CheckMark}:after {
    display: block;
    color: #F9F9F9;
  }
`
