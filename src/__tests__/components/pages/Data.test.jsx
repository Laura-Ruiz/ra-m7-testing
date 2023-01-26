import { fireEvent, render, screen, waitFor } from '../../utils'
import { Data } from '../../../pages'

describe('Data', () => {
  it('renders', () => {
    render(<Data />)

    expect(screen.getByText('Viviendas')).toBeInTheDocument()
    expect(screen.getByText('Por barrio')).toBeInTheDocument()
    expect(screen.getByText('Descargar CSV')).toBeInTheDocument()
  })

  it('renders a table', async () => {
    render(<Data />)
    await waitFor(() => {
      expect(screen.getByText('Piso 2')).toBeInTheDocument()
    })
  })

  it.only('renders district table table', async () => {
    render(<Data />)
    await waitFor(() => {
      expect(screen.getByText('Piso 2')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Por barrio'))
    await waitFor(() => {
      expect(screen.getByTestId('districtsTable')).toBeInTheDocument()
    })
  })
})
