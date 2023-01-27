import { render, screen } from '@testing-library/react'
import { Triangle } from '../../../../components/atoms'

describe('Triangle', () => {
  it('renders', () => {
    render(<Triangle/>)
    const svg = screen.getByTestId("arrow")
    expect(svg).toBeInTheDocument()
  })

})
