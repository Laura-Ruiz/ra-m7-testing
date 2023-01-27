import { render, screen } from '@testing-library/react'
import HouseCard from '../../../components/molecules/HouseCard'

describe('HouseCard', () => {
  it('renders', () => {
 
    render(<HouseCard title="Piso 1" price="100000" img="https://kevinmamaqi.com/static/casas/1.jpg" link="#" />)

    expect(screen.getByText('Localizar')).toBeInTheDocument()
    expect(screen.getByText('Piso 1')).toBeInTheDocument()
    expect(screen.getByText('100000')).toBeInTheDocument()
    
  })

  it('should use the correct src attribute', () => {
    render(<HouseCard title="Piso 1" price="100000" img="https://kevinmamaqi.com/static/casas/1.jpg" link="#" />)
    const img = screen.getByAltText('Piso 1')
    expect(img.getAttribute('src')).toBe('https://kevinmamaqi.com/static/casas/1.jpg')
  })
})
