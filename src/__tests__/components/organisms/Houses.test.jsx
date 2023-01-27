import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { Houses } from '../../../components/organisms'
import { store } from '../../../store/store'

describe('Houses', () => {
 
  it('renders a Loading text', () => {
    render(
      <Provider store={store}>
        <Houses/>
      </Provider>,
    )
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders a house', async () => {
    render(<Provider store={store}>
        <Houses/>
      </Provider>,)
    await waitFor(() => {
      expect(screen.getByText('Piso 2')).toBeInTheDocument()
    })
  })
})
