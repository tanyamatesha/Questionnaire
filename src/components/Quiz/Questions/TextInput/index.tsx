import React from "react"
import styled from "styled-components"

export type TextInputProps = {
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInputField = styled.input`
  font-size: 0.875rem;
  line-height: 1rem;

  background: #0B5AA2;
  color: #EBF4FC;

  border-radius: 0.25rem;
  border: 1px solid #1D6FB7;

  padding: 0.75rem 1rem;

  outline: none;
  resize: none;
  width: 14rem;

  &::placeholder {
    color: #C4DEF6;
  }

  @media screen and (min-width: 948px) {
    font-size: 1rem;
    line-height: 1.1875rem;
    
    width: 20rem;
  }
`

export const TextInput: React.FC<TextInputProps> = ({ id, onChange, value }) => (
  <TextInputField
    type="text"
    id={id}
    value={value}
    placeholder="Write something..."
    onChange={onChange}
  />
)
