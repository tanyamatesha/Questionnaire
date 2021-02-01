
import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Button from 'components/Button/index.tsx'

describe('Button', () => {
  describe('type prop', () => {
    const typeOptions = ["submit", "reset", "button"]

    typeOptions.forEach(typeOption =>
      it(`should render element with ${typeOption} type`, () => {
        render(<Button type={typeOption} />)
        const button = screen.getByRole('button')

        expect(button).toHaveAttribute('type', typeOption)
      })
    )
  })

  describe('size prop', () => {
    const sizeOptions = ["md", "lg", "stretch"]

    sizeOptions.forEach(sizeOption =>
      it(`should render element with ${sizeOption} size className`, () => {
        render(<Button sizing={sizeOption} />)
        const button = screen.getByRole('button')

        expect(button).toMatchSnapshot()
      })
    )
  })
})
