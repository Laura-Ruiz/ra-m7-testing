import { render, screen, waitFor } from '../../utils'
import { Home } from '../../../pages'

describe('Home', () => {
  it('renders', () => {
    render(<Home />)
    expect(screen.getByText('Mapa')).toBeInTheDocument()
  })

  it('renders a loadMore button', async () => {
    render(<Home />)
    await waitFor(() => {
      expect(screen.getByText('Load more')).toBeInTheDocument()
    })

  })

})
