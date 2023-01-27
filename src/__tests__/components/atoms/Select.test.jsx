import { render, screen } from '@testing-library/react'
import { Select } from '../../../components/atoms'

describe('Label', () => {
  it('renders', () => {
    render(<Select id="rowsPerPage" name="rowsPerPage">Select</Select>)
    const select = screen.getByTestId('rowsPerPage')

    expect(select).toBeInTheDocument()
  })

})
