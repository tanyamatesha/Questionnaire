import React from "react"

import { Paragraph } from "../../../Paragraph"

import * as CheckBoxInput from "./styles"

export type MultipleChoiceProps = {
  id: string
  name: string
  label: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({ id, name, label, checked, onChange }) => (
  <CheckBoxInput.Label htmlFor={id}>
    <CheckBoxInput.Input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <CheckBoxInput.CheckMark />
    <Paragraph>{label}</Paragraph>
  </CheckBoxInput.Label>
)
