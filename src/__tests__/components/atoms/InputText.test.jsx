import { render, screen } from '@testing-library/react'
import { vitest } from 'vitest';
import { InputText } from '../../../components/atoms'

describe('InputText', () => {
  it('renders', () => {

    const mockFn = vitest.fn();

    render(<InputText id="test" onChange={mockFn}/>)
    const inputText = screen.getByTestId('test')

    expect(inputText).toBeInTheDocument()
    expect(inputText).toHaveAttribute("type", "text")

  })
})
