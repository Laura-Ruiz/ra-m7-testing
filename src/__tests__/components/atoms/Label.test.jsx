import { render, screen } from '@testing-library/react'
import { Label } from '../../../components/atoms'

describe('Label', () => {
  it('renders', () => {
    render(<Label htmlFor="test-label">Test</Label>)
    const label = screen.getByText('Test')

    expect(label).toBeInTheDocument()
    expect(label).toHaveAttribute('for', 'test-label')
  })
})
