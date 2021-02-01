import React from "react"
import styled from "styled-components"

export type TextAreaProps = {
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextAreaInput = styled.textarea`
  font-size: 0.875rem;
  line-height: 1rem;

  background: #0B5AA2;
  color: #EBF4FC;

  border: 1px solid #1D6FB7;
  border-radius: 0.25rem;

  padding: 0.75rem 1rem;

  outline: none;

  resize: none;
  width: 100%;
  min-height: 7rem;
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

export const TextArea: React.FC<TextAreaProps> = ({ id, onChange, value }) => (
  <TextAreaInput
    id={id}
    value={value}
    placeholder="Write something..."
    onChange={onChange}
  />
)
