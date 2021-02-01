import React from "react"

import { Paragraph } from "../../../Paragraph"

import * as RadioInput from "./styles"

export type SingleChoiceProps = {
  id: string
  name: string
  label: string
  checked: boolean
  onChange: () => void
}

export const SingleChoice: React.FC<SingleChoiceProps> = ({ id, name, label, checked, onChange }) => (
  <RadioInput.Label htmlFor={id}>
    <RadioInput.Input
      id={id}
      name={name}
      checked={checked}
      type="radio"
      onChange={onChange}
    />
    <RadioInput.CheckMark />
    <Paragraph>{label}</Paragraph>
  </RadioInput.Label >
)
