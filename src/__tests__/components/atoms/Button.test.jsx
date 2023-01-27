import { render, screen } from '@testing-library/react'
import { Button } from '../../../components/atoms'

describe('Button', () => {
  it('renders', () => {
    render(<Button>Click</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
