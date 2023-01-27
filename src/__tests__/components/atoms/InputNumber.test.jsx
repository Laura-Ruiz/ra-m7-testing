import { render, screen } from '@testing-library/react'
import { vitest } from 'vitest';
import { InputNumber } from '../../../components/atoms'

describe('InputNumber', () => {
  it('renders', () => {

    const mockFn = vitest.fn();

    render(<InputNumber id="test" name="test" onChange={mockFn}/>)
    const inputNumber = screen.getByTestId('test')

    expect(inputNumber).toBeInTheDocument()
    expect(inputNumber).toHaveAttribute("type", "number")

  })
})
