import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../../components/layout/Header'

describe('Label', () => {
  it('renders', () => {
    render(<BrowserRouter><Header/></BrowserRouter>)

    expect(screen.getByText('MIPISO.com')).toBeInTheDocument()
    expect(screen.getByText('Buscador')).toBeInTheDocument()
    expect(screen.getByText('Datos')).toBeInTheDocument()
    expect(screen.getByText('Mi perfil')).toBeInTheDocument()

  })
})